<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { UseDark } from "@vueuse/components";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { changeNickname, changePassword, me } from "@/api/user/info";
import { applyRoleRequest, listMyRoleRequest } from "@/api/roleRequest/index";

const fullScreenDialog = true;
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
const role = reactive({
  show: false,
  msg: null,
  data: {
    name: "",
    idCard: "",
    remarks: "",
  },
  old: [],
});
const userType = ref("");

onMounted(async () => {
  let user = store.state.user;
  if (!user.userId) {
    let res = await me();
    if (res) {
      store.commit("user/setUser", res);
      user = res;
    } else {
      router.push({
        name: "login",
      });
    }
  }
  nickname.data.nickname = user.nickname;
  userType.value = user.userType;
  role.old = await listMyRoleRequest();
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
  let u = await changeNickname(nickname.data.nickname);
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

function showBusiness() {
  role.show = true;
  role.msg = null;
}

function showDate(time) {
  return new Date(time).toLocaleDateString();
}

async function applyBusiness() {
  try {
    let res = await applyRoleRequest({
      name: role.data.name,
      idCard: role.data.idCard,
      remarks: role.data.remarks,
    });
    role.msg = res.applicant.nickname + " apply for business account";
    role.show = false;
  } catch (e) {
    role.msg = e.response.data.message;
  }
  role.old = await listMyRoleRequest();
}

function keyManagement() {
  router.push({
    name: "api-key",
  });
}

function admin() {
  router.push({
    name: "admin-role",
  });
}
</script>

<template>
  <div>
    <el-space direction="vertical" fill>
      <div @click="showNickname()" class="box">
        nickname: {{ nickname.data.nickname }}
      </div>
      <div @click="showPassword()" class="box">change password</div>
      <template v-if="userType === 'Personal'">
        <el-row @click="showBusiness()" class="box my-1">
          apply for Business account
        </el-row>
        <div class="box">
          <el-row class="my-1">History:</el-row>
          <el-row class="my-1 ml-2" v-for="i in role.old" :key="i.id">
            Apply at {{ showDate(i.create) }}
            <el-tag class="ml-2">{{ i.state }}</el-tag>
          </el-row>
        </div>
      </template>
      <div
        @click="keyManagement()"
        class="box"
        v-else-if="userType === 'Business'"
      >
        api key management
      </div>
      <div @click="admin()" class="box" v-else-if="userType === 'Admin'">
        Admin View
      </div>
      <el-row class="box" align="middle" justify="center">
        Dark:
        <UseDark v-slot="{ isDark, toggleDark }">
          <el-switch
            class="ml-3"
            inline-prompt
            :model-value="isDark"
            :active-icon="Moon"
            :inactive-icon="Sunny"
            @change="toggleDark"
          />
        </UseDark>
      </el-row>
    </el-space>

    <el-dialog v-model="nickname.show" :fullscreen="fullScreenDialog">
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
    <el-dialog v-model="password.show" :fullscreen="fullScreenDialog">
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
    <el-dialog
      v-model="role.show"
      :fullscreen="fullScreenDialog"
      v-if="userType === 'Personal'"
    >
      <h2>Apply for Business account</h2>
      <el-form :model="role.data" label-width="80px">
        <el-form-item label="message" v-if="role.msg">
          <el-row>{{ role.msg }}</el-row>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="role.data.name" />
        </el-form-item>
        <el-form-item label="id card">
          <el-input v-model="role.data.idCard" />
        </el-form-item>
        <el-form-item label="remark">
          <el-input
            v-model="role.data.remarks"
            :autosize="{ minRows: 2, maxRows: 5 }"
            type="textarea"
          />
        </el-form-item>
        <el-button @click="role.show = false">Cancel</el-button>
        <el-button type="primary" @click="applyBusiness()">OK</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped></style>
