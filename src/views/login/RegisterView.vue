<script setup>
import { list } from "@/api/user/pay";

const onLoad = async () => {
  let pagePayInfo = await list();
  console.dir(pagePayInfo);
};

onLoad();
</script>

<template>
  <div></div>
</template>

<style lang="less" scoped></style>
