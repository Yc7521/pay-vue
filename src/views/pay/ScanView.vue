<script setup>
import { QrStream, QrCapture } from "vue3-qr-reader";
// eslint-disable-next-line no-undef
const data = reactive({
  error: "",
  result: "",
  stream: false,
  torch: false,
  camera: "rear",
  capture: false,
});

const onInit = async (func) => {
  try {
    await func;
  } catch (error) {
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
  }
};
// 识别结果回调
const onDecode = (res) => {
  setTimeout(() => {
    data.result = res;
    data.stream = false;
  }, 600);
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

// 错误回调
// eslint-disable-next-line no-unused-vars
const onError = (res) => {
  data.result = res;
  data.stream = false;
};
</script>

<template>
  <h3>Scan Code</h3>
  <div class="reader">
    <button class="sweep" @click="stream = true">扫一扫</button>

    <button class="sweep">
      <qr-capture :capture="capture" @decode="onDecode"></qr-capture>从相册选择
    </button>

    <qr-stream
      class="stream"
      v-show="stream"
      :torch="torch"
      :camera="camera"
      @onInit="onInit"
      @decode="onDecode"
    >
      <p v-show="error">{{ error }}</p>
      <button @click="torch = !torch">
        {{ torch ? "关闭闪光灯" : "开启闪光灯" }}
      </button>
      <button @click="switchCamera">
        {{ "rear" == camera ? "前置摄像头" : "后置摄像头" }}
      </button>
    </qr-stream>

    <textarea
      class="result"
      v-model="result"
      placeholder="二维码识别结果！"
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
</style>