<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { setToken } from "@/utils/auth";
import { login } from "@/api/system/login";
import { me } from "@/api/user/info";

const data = reactive({
  username: "",
  password: "",
});
const msg = ref("");
const router = useRouter();
const store = useStore();

async function doLogin() {
  let res = await login({
    username: data.username,
    password: data.password,
  });
  msg.value = res.msg;
  console.log(res.msg);
  if (res.error) {
    return;
  }
  setToken(res.idToken);
  let info = await me();
  store.commit("user/setUser", info);
  if (router.params && router.params.redirect) {
    router.push({
      path: router.params.redirect,
    });
  } else {
    router.push({
      name: "user",
    });
  }
}

async function doRegister() {
  router.push({
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
          <el-input
            ref="username"
            v-model="data.username"
            autofocus
            clearable
            tabindex="0"
            v-on:keyup.enter="$refs.password.focus()"
          />
        </el-form-item>
        <el-form-item label="password">
          <el-input
            ref="password"
            v-model="data.password"
            show-password
            clearable
            tabindex="0"
            v-on:keyup.enter="doLogin"
          />
        </el-form-item>
        <el-button type="primary" @click="doLogin">Login</el-button>
        <el-button @click="doRegister">Register</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped></style>
