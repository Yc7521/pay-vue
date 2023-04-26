<script setup>
import { useStore } from "vuex";
import { me } from "@/api/user/info";
import { list } from "@/api/user/pay";
import { ref, reactive } from "vue";
import { sleep } from "@/utils/time.js";

const data = reactive({
  userInfo: {},
  payments: [],
  page: 0,
  size: 2,
  noMore: false,
});
const loading = ref(false);
const disabled = computed(() => loading.value || data.noMore);

const router = useRouter();
const store = useStore();
const stateTagStyle = {
  Unpaid: "var(--color-secondary-container)",
  Paid: "var(--color-primary-container)",
  Canceled: "var(--color-tertiary-container)",
  Refunded: "var(--color-tertiary-container)",
};

onMounted(async () => {
  data.userInfo = store.state.user;
  if (!data.userInfo.userId) {
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

  await load();
});

async function load() {
  loading.value = true;
  await sleep(1000);
  let pagePayInfo = await list(data.page, data.size);
  console.dir(pagePayInfo);
  data.payments = data.payments.concat(pagePayInfo.content);
  if (pagePayInfo.last) {
    data.noMore = true;
  }
  data.page += 1;
  loading.value = false;
}

function toUser(id) {
  router.push({
    name: "user",
    params: {
      id: id,
    },
  });
}

function showDate(time) {
  return new Date(time).toLocaleString();
}
</script>

<template>
  <h2 class="mt-3">Payment History</h2>
  <div style="overflow: auto; height: 300px">
    <el-timeline v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
      <el-timeline-item
        v-for="i in data.payments"
        :key="i.id"
        :timestamp="showDate(i.create)"
        :color="stateTagStyle[i.state]"
        placement="top"
      >
        <template v-if="i.payingUser?.id === data.userInfo.id">
          <el-card
            class="cursor-pointer"
            style="width: 100%"
            @click="toUser(i.receivingUser.id)"
          >
            <el-row>
              <el-col :span="6">
                <el-tag size="small">
                  {{ i.state }}
                </el-tag>
              </el-col>
              <el-col :span="14">
                {{ i.receivingUser?.nickname ?? "" }}
              </el-col>
              <el-col :span="4">
                <template v-if="i.state === 'Paid'"> -{{ i.money }}</template>
              </el-col>
            </el-row>
          </el-card>
        </template>
        <template v-else>
          <el-card
            class="cursor-pointer"
            style="width: 100%"
            @click="toUser(i.payingUser.id)"
          >
            <el-row align="middle" :gutter="10">
              <el-col :span="6">
                <el-tag size="small">
                  {{ i.state }}
                </el-tag>
              </el-col>
              <el-col :span="14">
                {{ i.payingUser?.nickname ?? "" }}
              </el-col>
              <el-col :span="4">
                <template v-if="i.state === 'Paid'"> +{{ i.money }}</template>
              </el-col>
            </el-row>
          </el-card>
        </template>
      </el-timeline-item>
      <p v-if="loading">Loading...</p>
      <p v-if="data.noMore">No more</p>
    </el-timeline>
  </div>
  <!--  <el-table :data="data.payments">-->
  <!--    <el-table-column prop="id" label="id" />-->
  <!--    <el-table-column prop="money" label="money" />-->
  <!--    <el-table-column prop="payingUser.nickname" label="pay user" />-->
  <!--    <el-table-column prop="receivingUser.nickname" label="recv user" />-->
  <!--    <el-table-column prop="state" label="state" />-->
  <!--    <el-table-column prop="create" label="create time" />-->
  <!--    <el-table-column prop="finish" label="finish time" />-->
  <!--  </el-table>-->
</template>

<style lang="less" scoped></style>
