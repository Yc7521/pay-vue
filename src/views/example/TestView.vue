<script setup>
import { reactive, onMounted } from "vue";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import { ElMessage } from "element-plus";
import { getTradingCode } from "@/api/tradingCode/index";
import { genReceiptCode, me } from "@/api/user/info";
import { login } from "@/api/system/login";

const data = reactive({
  show: false,
  code: {
    id: 0,
    userInfoId: undefined,
    tradingType: undefined,
    money: 0,
  },
  task: 0,
  message: "",
  name: "",
  price: 0,
  users: [],
  data: [],
});
const template_data = [
  {
    url: "/cookie-01.png",
    name: "饼干",
    price: 10,
    token: "",
  },
  {
    url: "/cookie-02.png",
    name: "巧克力饼干",
    price: 15,
    token: "",
  },
];

onMounted(async () => {
  /**
   * @type {LoginRes[]}
   */
  const token = await Promise.all([
    login({
      key: "6327269b245ab286f863e2411f37384b3e23",
    }),
    login({
      key: "0baafdf94a54a89bab21954506ea7e45e62c",
    }),
  ]);
  /**
   * @type {UserInfo[]}
   */
  const users = await Promise.all([
    me({
      headers: {
        isToken: false,
        Authorization: "Bearer " + token[0].idToken,
      },
    }),
    me({
      headers: {
        isToken: false,
        Authorization: "Bearer " + token[1].idToken,
      },
    }),
  ]);
  for (let i = 0; i < 2; i++) {
    data.data.push({
      ...template_data[i],
      token: token[i].idToken,
      shopName: users[i].nickname,
    });
  }
  data.users = token;
});
onUnmounted(async () => {
  if (data.task !== 0) {
    cancel();
  }
});

watch(
  () => data.show,
  (val) => {
    if (!val) {
      cancel();
    }
  }
);

async function loop() {
  try {
    let code = await getTradingCode(data.code.id);
    switch (code.state) {
      case "Created":
        data.message = "用户已扫码，请点击支付。";
        break;
      case "Finished":
        cancel();
        ElMessage.info({
          message: "用户成功支付",
          type: "success",
        });
        break;
      case "Canceled":
        cancel();
        ElMessage.info({
          message: "用户取消支付",
          type: "info",
        });
        break;
    }
  } catch (e) {
    data.show = false;
    console.log("error");
  }
}

async function genCode(item) {
  data.message = "";
  data.code = await genReceiptCode(item.price, {
    headers: {
      isToken: false,
      Authorization: "Bearer " + item.token,
    },
  });
  data.task = setInterval(loop, 3000);
}

async function doPay(item) {
  await genCode(item);
  data.name = item.name;
  data.price = item.price;
  data.show = true;
}

function cancel() {
  clearInterval(data.task);
  data.task = 0;
  data.show = false;
}
</script>
<template>
  <el-row justify="center">
    <template v-for="i in data.data" :key="i.url">
      <el-col :span="14">
        <el-image :src="i.url" :lazy="true" fit="cover" />
      </el-col>
      <el-col :span="6">
        <el-row class="mt-3">{{ i.shopName }}</el-row>
        <el-row class="mt-3">商品：{{ i.name }}</el-row>
        <el-row class="mt-3">价格：{{ i.price }}元</el-row>
        <el-row class="mt-3" justify="start">
          <el-button type="primary" @click="doPay(i)">Pay</el-button>
        </el-row>
      </el-col>
    </template>
  </el-row>

  <el-dialog v-model="data.show" center title="付款码">
    <el-row justify="center" :gutter="20">
      <el-col :span="14">
        <el-row justify="end">
          <vue-qr :text="JSON.stringify(data.code)" :size="200"></vue-qr>
        </el-row>
      </el-col>
      <el-col :span="10" style="margin-top: 1em">
        <el-row class="mt-3">商品：{{ data.name }}</el-row>
        <el-row class="mt-3">价格：{{ data.price }}元</el-row>
        <el-row class="mt-3" v-if="data.message">{{ data.message }}</el-row>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<style scoped></style>
