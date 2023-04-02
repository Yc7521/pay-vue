<script setup>
import { register } from "@/api/system/login";

const data = reactive({
  username: "",
  password: "",
});
const msg = reactive({
  text: "",
  color: "#6cf",
});
const router = useRouter();

async function doRegister() {
  try {
    await register(data.username, data.password);
    msg.color = "#6cf";
    msg.text = "Register Success";
    setTimeout(async () => {
      await router.push({
        name: "login",
      });
    }, 3000);
  } catch (e) {
    msg.color = "#f66";
    msg.text = "Register Failed";
    if (e.response) {
      msg.text += ` (${e.response.data.message})`;
    }
  }
}

async function doLogin() {
  await router.push({
    name: "login",
  });
}
</script>

<template>
  <el-row>
    <el-col
      :lg="{ span: 8, offset: 8 }"
      :md="{ span: 12, offset: 6 }"
      :sm="{ span: 16, offset: 4 }"
      :xs="24"
    >
      <el-form :model="data">
        <el-form-item label="message" v-if="msg.text">
          <el-row :style="{ color: msg.color }">{{ msg.text }}</el-row>
        </el-form-item>
        <el-form-item label="username">
          <el-input v-model="data.username" />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="data.password" />
        </el-form-item>
        <el-button type="primary" @click="doRegister">Register</el-button>
        <el-button @click="doLogin">Login</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped></style>
