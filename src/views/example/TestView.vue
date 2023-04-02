<script setup>
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import { get2 } from "@/api/tradingCode/index";
import { genReceiptCode } from "@/api/user/info";
import { onMounted } from "vue";
import { ElMessage } from "element-plus";

const data = reactive({
  show: false,
  code: {
    id: 0,
    userInfoId: undefined,
    tradingType: undefined,
    money: 0,
  },
  task: 0,
  message: "",
});
const url =
  "https://img0.baidu.com/it/u=4147881415,1547203251&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281";

onMounted(async () => {});
onUnmounted(async () => {
  if (data.task !== 0) {
    cancel();
  }
});

watch(
  () => data.show,
  (val) => {
    if (!val) {
      cancel();
    }
  }
);

async function loop() {
  try {
    let code = await get2(data.code.id);
    switch (code.state) {
      case "Created":
        data.message = "用户已扫码，请点击支付。";
        break;
      case "Finished":
        cancel();
        ElMessage.info({
          message: "用户成功支付",
          type: "success",
        });
        break;
      case "Canceled":
        cancel();
        ElMessage.info({
          message: "用户取消支付",
          type: "info",
        });
        break;
    }
  } catch (e) {
    data.show = false;
    console.log("error");
  }
}

async function genCode() {
  data.message = "";
  data.code = await genReceiptCode(10);
  data.task = setInterval(loop, 3000);
}

async function doPay() {
  await genCode();
  data.show = true;
}

function cancel() {
  clearInterval(data.task);
  data.task = 0;
  data.show = false;
}
</script>
<template>
  <el-row justify="center">
    <el-col :span="18">
      <el-image :src="url" lazy fit="cover" />
    </el-col>
    <el-col :span="6">
      <el-row class="mt-3">商品：饼干</el-row>
      <el-row class="mt-3">价格：10元</el-row>
      <el-row class="mt-3" justify="start">
        <el-button type="primary" @click="doPay">Pay</el-button>
      </el-row>
    </el-col>
  </el-row>
  <el-dialog v-model="data.show" center title="付款码">
    <el-row justify="center" :gutter="20">
      <el-col :span="14">
        <el-row justify="end">
          <vue-qr :text="JSON.stringify(data.code)" :size="200"></vue-qr>
        </el-row>
      </el-col>
      <el-col :span="10" style="margin-top: 1em">
        <el-row class="mt-3">商品：饼干</el-row>
        <el-row class="mt-3">价格：10元</el-row>
        <el-row class="mt-3" v-if="data.message">{{ data.message }}</el-row>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<style scoped></style>
