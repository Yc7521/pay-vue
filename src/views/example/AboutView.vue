<script setup>
import { ElLoading } from "element-plus";

let loading = ElLoading.service({
  lock: true,
  text: "正在加载，请稍候",
  spinner: "Loading",
  background: "rgba(0, 0, 0, 0.7)",
});
setTimeout(() => {
  loading.close();
}, 1000);
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
