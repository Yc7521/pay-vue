<script setup>
import { reactive } from "vue";
import { QrStream, QrCapture } from "vue3-qr-reader";
import { ElMessage, ElMessageBox } from "element-plus";
import { Back } from "@element-plus/icons-vue";
import {
  cancelPayCode,
  createPayWithCode,
  confirmPayCode,
} from "@/api/user/pay";
import { hasTradingCode } from "@/api/tradingCode/index";
// import { changePassword } from "@/api/user/info.js";

const router = useRouter();

const data = reactive({
  error: "",
  result: {},
  stream: true,
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
    // data.stream = false;
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
                  customStyle: {
                    width: "80%",
                  },
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning",
                  showClose: false,
                  closeOnClickModal: false,
                  closeOnPressEscape: false,
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
  const strokeStyle = stroke[Math.floor(Math.random() * 3)];
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
  <!--  <h3>Scan Code</h3>-->
  <div
    style="z-index: 1000; background-color: var(--el-bg-color-surface)"
    class="fixed inset-0 bg-[var(--el-bg-color-surface)] z-1000"
  >
    <div class="absolute inset-0 bg-[var(--el-bg-color-surface)] z-1001"></div>

    <qr-stream
      class="absolute inset-0 z-1002"
      v-if="data.stream"
      :torch="data.torch"
      :camera="data.camera"
      @decode="onDecode"
    />

    <!-- bg-[rgba(0,0,0,0.5)] -->
    <div class="absolute inset-4 z-1010">
      <el-row align="middle" class="h-[40px] text-left mt-3">
        <el-button class="!outline-none" text circle @click="router.back()">
          <el-icon>
            <Back />
          </el-icon>
        </el-button>
        Scan
      </el-row>
      <el-row
        class="text-[var(--el-color-danger)] mt-3"
        justify="center"
        v-show="data.error"
      >
        {{ data.error }}
      </el-row>
      <el-row class="mt-3" justify="center">
        <el-space direction="horizontal">
          <el-button @click="data.torch = !data.torch" class="opacity-75">
            {{ data.torch ? "关闭闪光灯" : "开启闪光灯" }}
          </el-button>
          <el-button @click="switchCamera()" class="opacity-75">
            {{ "rear" === data.camera ? "前置摄像头" : "后置摄像头" }}
          </el-button>
        </el-space>
      </el-row>
      <div
        class="absolute h-[200px] w-[200px] inset-4 m-auto border-2 border-dashed border-red-600 border-opacity-40 752106133"
      ></div>
      <button class="select-image text-[18px]">
        <qr-capture :capture="data.capture" @decode="onDecode"></qr-capture>
        从相册选择
      </button>
    </div>

    <!-- <textarea-->
    <!--   class="result"-->
    <!--   v-model="data.message"-->
    <!--   placeholder="信息"-->
    <!-- ></textarea>-->
  </div>
</template>

<style lang="less" scoped>
.select-image {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  margin: 20px;
  padding: 12px;
  color: var(--el-color-black);
  background: var(--el-bg-color-surface);
  border: 1px solid var(--el-color-outline);
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

// .result {
//   box-sizing: border-box;
//   display: block;
//   margin: 10px auto;
//   padding: 10px;
//   width: 80%;
//   min-height: 180px;
//   font-size: 22px;
//   border-radius: 6px;
//   border: 1px solid gray;
// }
</style>
