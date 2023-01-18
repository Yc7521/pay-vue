<script setup>
import { me } from "@/api/user/info";

const data = reactive({
  userInfo: {},
});

const onLoad = async () => {
  data.userInfo = await me();
};

onLoad();
</script>

<template>
  <div></div>
  <div>Hello {{ data.userInfo.id }}</div>
</template>

<style lang="less" scoped></style>
