<script setup>
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";

const data = reactive({
  username: "",
  password: "",
});
const router = useRouter();

async function doLogin() {
  let res = await login(data.username, data.password);
  setToken(res.id_token);
  await router.push({
    name: "user",
  });
}
async function doRegister() {
  await router.push({
    name: "register",
  });
}
</script>

<template>
  <el-row>
    <el-col :md="{ span: 16, offset: 4 }">
      <el-form :model="data">
        <el-form-item label="username">
          <el-input v-model="data.username" />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="data.password" />
        </el-form-item>
        <el-button type="primary" @click="doLogin">Login</el-button>
        <el-button @click="doRegister">Register</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped></style>
