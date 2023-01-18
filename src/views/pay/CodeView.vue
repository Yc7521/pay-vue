<script setup>
import vueQr from "vue-qr/src/packages/vue-qr.vue";

let code = reactive({
  type: "pay",
  money: 0,
});

function qr() {
  return JSON.stringify(code);
}
</script>

<template>
  <h3>Show Code</h3>
  <el-input-number v-model="code.money" :step="10" />
  <div>
    <vue-qr :text="qr()" :size="200"></vue-qr>
  </div>
</template>

<style lang="less" scoped></style>
