<template>
  <el-select-v2
    v-model="value1"
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle"
    multiple
    clearable
  />
  <el-button type="primary" @click="clear">Clear</el-button>
</template>

<script setup>
import { ref } from "vue";

const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const value1 = ref([]);
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}));

function clear() {
  value1.value = [];
}
</script>

<style scoped></style>
