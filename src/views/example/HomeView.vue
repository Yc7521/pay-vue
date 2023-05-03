<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function go(name) {
  router.push({ name });
}
</script>

<template>
  <el-row class="mt-3">
    <el-col :span="12">
      <el-button size="large" type="primary" @click="go('scan-code')">扫一扫</el-button>
    </el-col>
    <el-col :span="12">
      <el-button size="large" type="primary" @click="go('show-code')">收付款</el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
