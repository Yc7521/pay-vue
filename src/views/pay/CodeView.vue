<script setup>
import { reactive, watch } from "vue";
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
const type = ref("Payment");

watch(type, async () => {
  await genCode(type.value);
});
watch(
  () => data.money,
  async () => {
    await genCode(type.value);
  }
);

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
  <!-- <h3>Show Code</h3> -->

  <el-row justify="space-evenly">
    <el-col :xs="24" :span="6" class="m-2">
      <!-- <el-select v-model="type">
        <el-option
          v-for="item in ['Payment', 'Receipt']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select> -->
      <el-switch
        class="switch"
        v-model="type"
        active-text="Payment"
        inactive-text="Receipt"
        active-value="Payment"
        inactive-value="Receipt"
      />
    </el-col>
    <el-col :xs="24" :span="6" class="m-2">
      <el-input-number v-model="data.money" :step="10" />
    </el-col>
  </el-row>
  <div v-if="data.code.id !== 0">
    <vue-qr :text="qr()" :size="200"></vue-qr>
  </div>
</template>

<style lang="less" scoped>
.switch {
  --el-switch-on-color: var(--el-bg-color-variant);
  --el-switch-off-color: var(--el-bg-color-variant);
}
</style>
