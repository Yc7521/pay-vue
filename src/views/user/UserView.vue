<script setup>
import { useStore } from "vuex";
import { me } from "@/api/user/info";
import { removeToken } from "@/utils/auth.js";
import { list } from "@/api/user/pay";

const data = reactive({
  userInfo: {},
  payments: [],
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
      console.log(res);
    } else {
      await router.push({
        name: "login",
      });
    }
  }

  let pagePayInfo = await list();
  console.dir(pagePayInfo);
  data.payments = pagePayInfo;
});

async function doLogout() {
  store.commit("user/setUser", {});
  removeToken();
  await router.push({
    name: "login",
  });
}
</script>

<template>
  <el-space direction="vertical" fill class="text-left">
    <el-card>
      <template #header>
        <el-image src="#" />
      </template>
      <div>
        Hello, {{ data.userInfo.nickname }}
        <el-tag class="cursor-pointer" size="small" round @click="doLogout">
          Logout
        </el-tag>
      </div>
      <div>Type: {{ data.userInfo.userType }}</div>
    </el-card>
    <el-space direction="vertical" fill class="text-left">
      <div
        style="
          border-radius: var(--el-border-radius-base);
          box-shadow: var(--el-box-shadow-light);
        "
      >
        money: {{ data.userInfo.money }}
      </div>
      <div
        style="
          border-radius: var(--el-border-radius-base);
          box-shadow: var(--el-box-shadow-light);
        "
      >
        <router-link to="/user/setting">Setting</router-link>
      </div>
    </el-space>
  </el-space>

  <h2 class="mt-3">Payment History</h2>
  <el-table :data="data.payments.content">
    <el-table-column prop="id" label="id" />
    <el-table-column prop="money" label="money" />
    <el-table-column prop="payingUser.nickname" label="pay user" />
    <el-table-column prop="receivingUser.nickname" label="recv user" />
    <el-table-column prop="state" label="state" />
    <el-table-column prop="create" label="create time" />
    <el-table-column prop="finish" label="finish time" />
  </el-table>
</template>

<style lang="less" scoped></style>
