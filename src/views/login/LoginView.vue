<script setup>
import { login } from "@/api/system/login.d.js";
import { setToken } from "@/utils/auth";
import { me } from "@/api/user/info.js";
import { useStore } from "vuex";

const data = reactive({
  username: "",
  password: "",
});
const msg = ref("");
const router = useRouter();
const store = useStore();

async function doLogin() {
  let res = await login(data.username, data.password);
  msg.value = res.msg;
  console.log(res.msg);
  if (res.error) {
    return;
  }
  setToken(res.id_token);
  let info = await me();
  store.commit("user/setUser", info);
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
    <el-col
      :lg="{ span: 8, offset: 8 }"
      :md="{ span: 12, offset: 6 }"
      :sm="{ span: 16, offset: 4 }"
      :xs="24"
    >
      <el-form :model="data">
        <el-form-item label="message" v-if="msg">
          <el-row>{{ msg }}</el-row>
        </el-form-item>
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
