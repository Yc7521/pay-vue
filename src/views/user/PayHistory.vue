<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
// eslint-disable-next-line no-unused-vars
import { sleep } from "@/utils/time.js";
import { me } from "@/api/user/info";
import { listPayInfo } from "@/api/user/pay";

const data = reactive({
  userInfo: {},
  payments: [],
  page: 0,
  size: 5,
});
const userInfo = reactive({
  show: false,
  user: null,
});
const noMore = ref(false);
const loading = ref(false);
const disabled = computed(() => loading.value || noMore.value);

const router = useRouter();
const store = useStore();
const stateTagStyle = {
  Unpaid: "var(--el-color-success-light-3)",
  Paid: "var(--el-color-primary-light-3)",
  Canceled: "var(--el-color-warning-light-3)",
  Refunded: "var(--el-color-warning-light-3)",
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
      router.push({
        name: "login",
      });
    }
  }

  await load();
});

async function load() {
  try {
    loading.value = true;
    // await sleep(1000);
    let pagePayInfo = await listPayInfo(data.page, data.size);
    console.dir(pagePayInfo);
    data.payments = data.payments.concat(pagePayInfo.content);
    if (pagePayInfo.last) {
      noMore.value = true;
    }
    data.page += 1;
    loading.value = false;
  } catch (e) {
    console.error(e);
  }
}

function showUser(user) {
  userInfo.user = user;
  userInfo.show = true;
}

function showDate(time) {
  return new Date(time).toLocaleString();
}
</script>

<template>
  <div class="h-[100%] overflow-y-scroll relative">
    <div class="mt-3 h-[1em]"><h2>Payment History</h2></div>
    <el-scrollbar class="mt-3 !h-[calc(100%-4rem)]">
      <el-timeline
        v-infinite-scroll="load"
        :infinite-scroll-distance="10"
        :infinite-scroll-disabled="disabled"
      >
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
              @click="showUser(i.receivingUser)"
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
              @click="showUser(i.payingUser)"
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
        <p v-if="noMore">No more</p>
      </el-timeline>
    </el-scrollbar>
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
