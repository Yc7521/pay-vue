<script setup>
import { QrStream } from "vue3-qr-reader";
import { createPaymentWithCode } from "@/api/user/pay.js";
import { ElMessage, ElMessageBox } from "element-plus";
import { cancelWithCode, payWithCode } from "@/api/user/pay.d.js";
import { has } from "@/api/tradingCode/index.d.js";
import { defineComponent } from "vue";
import { QrCapture, QrStream } from "vue3-qr-reader";

export default defineComponent({
  components: { QrCapture, QrStream },
});

const data = reactive({
  error: "",
  result: {},
  money: 0,
  stream: false,
  torch: false,
  camera: "rear",
  capture: false,
  message: "",
});

async function hasCode({ id }) {
  try {
    await has(id);
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
          if (tradingType === "Payment") {
            // 收款
            data.message += `收款${money}元\n`;
            // createPaymentWithCode();
            // TODO
          } else {
            ElMessage({
              type: "error",
              message: "二维码无效!",
            });
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
</script>

<template>
  <h3>Scan Code</h3>
  <div class="reader">
    <button class="sweep" @click="data.stream = true">扫一扫</button>

    <qr-stream
      class="stream"
      v-show="data.stream"
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

    <el-input-number v-model="data.money" :step="10" />

    <textarea
      class="result"
      v-model="data.message"
      placeholder="信息"
    ></textarea>
  </div>
</template>

<style scoped></style>
