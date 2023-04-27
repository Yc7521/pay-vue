<script setup>
import { reactive } from "vue";
import { QrStream, QrCapture } from "vue3-qr-reader";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  cancelPayCode,
  createPayWithCode,
  confirmPayCode,
} from "@/api/user/pay";
import { hasTradingCode } from "@/api/tradingCode/index";
// import { changePassword } from "@/api/user/info.js";

const data = reactive({
  error: "",
  result: {},
  stream: false,
  torch: false,
  camera: "rear",
  capture: false,
  message: "",
});

function onError(e) {
  const error = e.reason;
  if (error.name === "NotAllowedError") {
    data.error = "错误: 您需要授予相机访问权限!";
  } else if (error.name === "NotFoundError") {
    data.error = "错误: 此设备上没有摄像头!";
  } else if (error.name === "NotSupportedError") {
    data.error = "错误: 需要安全上下文(HTTPS, 本地主机)!";
  } else if (error.name === "NotReadableError") {
    data.error = "错误: 相机是否已经在使用？";
  } else if (error.name === "OverconstrainedError") {
    data.error = "错误: 安装的摄像头不合适!";
  } else if (error.name === "StreamApiNotSupportedError") {
    data.error = "错误: 此浏览器不支持 Stream API!";
  } else if (error.name === "InsecureContextError") {
    data.error =
      "错误: 仅在安全上下文中允许访问相机。使用 HTTPS 或 localhost 而不是 HTTP!";
  } else {
    data.error = `错误: 相机错误(${error.name})!`;
  }
  setTimeout(() => {
    data.stream = false;
  }, 1000);
}

onMounted(async () => {
  try {
    // let res = await changePassword("1", "2");
    // console.log(res);
    console.log("onLoad");
    window.addEventListener("unhandledrejection", onError);
  } catch (e) {
    console.log(e);
  }
});
onUnmounted(() => {
  window.removeEventListener("unhandledrejection", onError);
});

async function hasCode({ id }) {
  try {
    await hasTradingCode(id);
    data.message += `服务器存在此二维码\n`;
    return true;
  } catch (e) {
    data.message += `服务器不存在此二维码\n`;
    return false;
  }
}

watch(
  () => data.result,
  async (val) => {
    if (val) {
      let { id, userInfoId, tradingType, money } = val;
      console.log(val);
      if (id && userInfoId && tradingType) {
        if (await hasCode(val)) {
          if (tradingType === "Receipt") {
            let payment = await createPayWithCode(id, money);
            try {
              let res = await ElMessageBox.confirm(
                `向${payment.receivingUser.nickname}付款${payment.money}元`,
                "确认付款",
                {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning",
                }
              );
              console.log("res", res);
              if (res === "confirm") {
                await confirmPayCode(id);
                ElMessage({
                  type: "success",
                  message: "付款成功!",
                });
                data.message += `付款成功!\n`;
              }
            } catch (e) {
              if (e === "cancel") {
                await cancelPayCode(id);
                ElMessage({
                  type: "info",
                  message: "付款取消!",
                });
                data.message += `取消成功!\n`;
              }
              throw e;
            }
          } else if (tradingType === "Payment") {
            // 收款
            data.message += `收款${money}元\n`;
            // TODO
          }
        } else {
          ElMessage({
            type: "error",
            message: "二维码无效!",
          });
        }
      }
    }
  }
);

// 识别结果回调
const onDecode = (res) => {
  try {
    data.result = JSON.parse(res);
    setTimeout(() => {
      data.stream = false;
    }, 600);
  } catch (e) {
    console.log("decode error", e);
  }
};

// 切换前后置摄像头
const switchCamera = () => {
  switch (data.camera) {
    case "front":
      data.camera = "rear";
      break;
    case "rear":
      data.camera = "front";
      break;
  }
};

// 改变扫一扫选框
const stroke = ["red", "green", "blue"];
// eslint-disable-next-line no-unused-vars
const paintBoundingBox = (detectedCodes, ctx) => {
  const strokeStyle = stroke[parseInt(Math.random() * 3)];
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height },
    } = detectedCode;
    ctx.lineWidth = 2; // 选框宽度
    ctx.strokeStyle = strokeStyle; // 选框颜色
    ctx.strokeRect(x, y, width, height);
  }
};
</script>

<template>
  <h3>Scan Code</h3>
  <div class="reader">
    <button class="sweep" @click="data.stream = true">扫一扫</button>

    <button class="sweep">
      <qr-capture :capture="data.capture" @decode="onDecode"></qr-capture>
      从相册选择
    </button>

    <qr-stream
      class="stream"
      v-if="data.stream"
      :torch="data.torch"
      :camera="data.camera"
      @decode="onDecode"
    >
      <div style="color: red" class="frame"></div>
      <p v-show="data.error">{{ data.error }}</p>
      <button @click="data.torch = !data.torch">
        {{ data.torch ? "关闭闪光灯" : "开启闪光灯" }}
      </button>
      <button @click="switchCamera">
        {{ "rear" === data.camera ? "前置摄像头" : "后置摄像头" }}
      </button>
      <button @click="data.stream = !data.stream">退出</button>
    </qr-stream>

    <textarea
      class="result"
      v-model="data.message"
      placeholder="信息"
    ></textarea>
  </div>
</template>

<style lang="less" scoped>
.reader {
  font-size: 16px;

  .sweep {
    position: relative;
    margin: 20px;
    padding: 12px;
    width: 300px;
    font-size: 18px;
    color: white;
    background: #42b983;
    border: 1px solid #42b983;
    overflow: hidden;
    cursor: pointer;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
  }

  .stream {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    p {
      color: red;
      text-align: center;
    }

    button {
      margin: 20px auto;
      border: 1px solid gray;
      background: rgba(255, 255, 255, 0.5);
    }
  }

  .result {
    box-sizing: border-box;
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: 80%;
    min-height: 180px;
    font-size: 22px;
    border-radius: 6px;
    border: 1px solid gray;
  }
}

.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>
