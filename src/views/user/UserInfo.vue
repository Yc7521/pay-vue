<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { removeToken } from "@/utils/auth.js";
import { me } from "@/api/user/info";

const data = reactive({
  userInfo: {},
});

const router = useRouter();
const store = useStore();

onMounted(async () => {
  data.userInfo = store.state.user;
  // if (!data.userInfo.userId)
  {
    let res = await me();
    if (res) {
      store.commit("user/setUser", res);
      data.userInfo = res;
    } else {
      router.push({
        name: "login",
      });
    }
  }
});

async function doLogout() {
  store.commit("user/setUser", {});
  removeToken();
  router.push({
    name: "login",
  });
}
</script>

<template>
  <el-space direction="vertical" fill class="text-left">
    <el-card>
      <!--      <template #header>-->
      <!--        <el-image src="#" />-->
      <!--      </template>-->
      <div>
        Hello, {{ data.userInfo.nickname }}
        <el-tag class="cursor-pointer" size="small" round @click="doLogout">
          Logout
        </el-tag>
      </div>
      <div>Type: {{ data.userInfo.userType }}</div>
    </el-card>
    <el-space direction="vertical" fill class="text-left">
      <div class="box">money: {{ data.userInfo.money }}</div>
      <div class="box">
        <router-link to="/user/history">Payment History</router-link>
      </div>
      <div class="box">
        <router-link to="/user/setting">Setting</router-link>
      </div>
    </el-space>
  </el-space>
</template>

<style scoped>
.box {
  border-radius: var(--el-border-radius-base);
  /*box-shadow: var(--el-box-shadow-light);*/
}
</style>
