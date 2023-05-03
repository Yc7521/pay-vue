<script setup>
import { defineProps, defineEmits, computed } from "vue";

// const props = defineProps({
//   modelValue: Boolean,
//   fullscreen: Boolean,
//   user: UserInfo,
// });
const props = defineProps(["modelValue", "fullscreen", "user"]);
const emit = defineEmits(["update:modelValue"]);

const full = computed(() => props.fullscreen || false);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <el-dialog v-model="value" :fullscreen="full" title="User Info">
    <el-card>
      <el-row>Name: {{ props.user.nickname }}</el-row>
      <el-row>Type: {{ props.user.userType }}</el-row>
    </el-card>
  </el-dialog>
</template>

<style scoped></style>
