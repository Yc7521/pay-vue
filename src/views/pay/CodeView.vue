<script setup>
import { reactive } from "vue";
import vueQr from "vue-qr/src/packages/vue-qr.vue";

let code = reactive({
  type: "pay",
  money: 1,
});

function qr() {
  return JSON.stringify(code);
}
</script>

<template>
  <h3>Show Code</h3>
  <input type="number" v-model="code.money" step="0.01" />
  <div>
    <vue-qr :text="qr()" :size="200"></vue-qr>
  </div>
</template>

<style scoped></style>
