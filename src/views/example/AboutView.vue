<script setup>
import { ElLoading } from "element-plus";
import { sleep } from "@/utils/time.js";

const data = reactive({
  title: "",
});

async function fetchData() {
  await sleep(1000);
  data.title = "new text";
}

onMounted(async () => {
  let loading = ElLoading.service({
    lock: true,
    text: "正在加载，请稍候",
    spinner: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await fetchData();
  loading.close();
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ data.title }}</p>
  </div>
</template>
