<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { changePassword, me } from "@/api/user/info";
import { updateNickname } from "@/api/user/info";

const router = useRouter();
const store = useStore();

const nickname = reactive({
  show: false,
  msg: null,
  data: {
    nickname: "",
  },
});
const password = reactive({
  show: false,
  msg: null,
  data: {
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  },
});

onMounted(async () => {
  const user = store.state.user;
  nickname.data.nickname = user.nickname;
  if (!user.userId) {
    let res = await me();
    if (res) {
      store.commit("user/setUser", res);
      nickname.data.nickname = res.nickname;
    } else {
      await router.push({
        name: "login",
      });
    }
  }
});

function showNickname() {
  nickname.show = true;
  nickname.msg = null;
}

async function saveNickname() {
  if (nickname.data.nickname === "") {
    nickname.msg = "nickname can not be empty";
    return;
  }
  let u = await updateNickname(nickname.data.nickname);
  if (u) {
    store.commit("user/setUser", u);
  }
  nickname.show = false;
  console.log("save nickname");
}

function showPassword() {
  password.show = true;
  password.msg = null;
}

function savePassword() {
  if (
    password.data.oldPassword === "" ||
    password.data.newPassword === "" ||
    password.data.newPassword2 === ""
  ) {
    password.msg = "password can not be empty";
    return;
  }
  if (password.data.newPassword !== password.data.newPassword2) {
    password.msg = "password not match";
    return;
  }
  changePassword(password.data.oldPassword, password.data.newPassword);
  password.show = false;
  console.log("save password");
}
</script>

<template>
  <div>
    <el-space direction="vertical" fill>
      <el-button @click="showNickname()" text>
        nickname: {{ nickname.data.nickname }}
      </el-button>
      <el-button @click="showPassword()" text> change password</el-button>
    </el-space>
    <el-dialog v-model="nickname.show">
      <h2>Change Nickname</h2>
      <el-form :model="nickname.data" label-width="120px">
        <el-form-item label="message" v-if="nickname.msg">
          <el-row>{{ nickname.msg }}</el-row>
        </el-form-item>
        <el-form-item label="nickname">
          <el-input
            v-model="nickname.data.nickname"
            @keydown.enter="saveNickname()"
          />
        </el-form-item>
        <el-button @click="nickname.show = false">Cancel</el-button>
        <el-button type="primary" @click="saveNickname()">OK</el-button>
      </el-form>
    </el-dialog>
    <el-dialog v-model="password.show">
      <el-row>
        <el-col>
          <h2>Change Password</h2>
        </el-col>
        <el-col>
          <el-form :model="password.data" label-width="120px">
            <el-form-item label="message" v-if="password.msg">
              <el-row>{{ password.msg }}</el-row>
            </el-form-item>
            <el-form-item label="old password">
              <el-input v-model="password.data.oldPassword" />
            </el-form-item>
            <el-form-item label="new password">
              <el-input v-model="password.data.newPassword" />
            </el-form-item>
            <el-form-item label="again">
              <el-input v-model="password.data.newPassword2" />
            </el-form-item>
            <el-button @click="password.show = false">Cancel</el-button>
            <el-button type="primary" @click="savePassword()">OK</el-button>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<style scoped></style>
