<script setup>
import { reactive } from "vue";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import { genPaymentCode, genReceiptCode } from "@/api/user/info";

const data = reactive({
  money: 0,
  code: {
    id: 0,
    userInfoId: undefined,
    tradingType: undefined,
    money: 0,
  },
});

/**
 * @param type {"Payment"|"Receipt"}
 */
async function genCode(type) {
  switch (type) {
    case "Payment":
      data.code = await genPaymentCode();
      break;
    case "Receipt":
      data.code = await genReceiptCode(data.money);
      break;
  }
}

function qr() {
  return JSON.stringify(data.code);
}
</script>

<template>
  <h3>Show Code</h3>
  <el-input-number v-model="data.money" :step="10" />
  <el-row justify="space-evenly">
    <el-col :xs="10" :span="6">
      <el-button type="primary" @click="genCode('Payment')">
        Payment
      </el-button>
    </el-col>
    <el-col :xs="10" :span="6">
      <el-button type="primary" @click="genCode('Receipt')">
        Receipt
      </el-button>
    </el-col>
  </el-row>
  <div>
    <vue-qr :text="qr()" :size="200"></vue-qr>
  </div>
</template>

<style lang="less" scoped></style>
