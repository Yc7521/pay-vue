<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { createForMe, getSecretKeyForMe } from "@/api/system/apikey";
import { ElMessageBox } from "element-plus";

const name = "ApiKey";
const fullScreenDialog = true;

const router = useRouter();
const store = useStore();

const data = reactive({
  userId: 0,
  keys: [],
  showCreate: false,
  expired: "",
});

onMounted(async () => {
  const user = store.state.user;
  if (!user.userId || !user.userType || user.userType === "Personal") {
    router.push({
      name: "api-key",
    });
  }
  data.userId = user.userId;
  data.keys = await getSecretKeyForMe();
});

function toDateStr(date) {
  date = new Date(date);
  let y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate();
  m = m < 10 ? `0${m}` : `${m}`;
  d = d < 10 ? `0${d}` : `${d}`;
  return `${y}-${m}-${d}T00:00:00`;
}

async function apply() {
  if (data.keys.length > 2) {
    await ElMessageBox.alert({
      title: "Warning",
      message: "You can only have 3 keys at most",
      type: "warning",
    });
    return;
  }
  let expired = toDateStr(data.expired);
  let key = await createForMe({
    expired: expired,
  });
  data.keys.push(key);
  data.showCreate = false;
}

function showKey(key) {
  // show the first 5 chars and the last 5 chars
  return key.slice(0, 5) + "***" + key.slice(-5);
}

function showDate(time) {
  return new Date(time).toLocaleDateString();
}

function copyKey(key) {
  // eslint-disable-next-line no-undef
  // copy(key);
  key;
}
</script>

<template>
  <h2>{{ name }}</h2>
  <el-row justify="center">
    <el-button @click="data.showCreate = true">apply a new key</el-button>
  </el-row>
  <el-row justify="center"> Key List:</el-row>
  <el-space direction="vertical">
    <el-row :key="key.key" v-for="key in data.keys" class="items-baseline">
      <el-button @click="copyKey(key.key)" text
        >{{ showKey(key.key) }}
      </el-button>
      <span>expire at: {{ showDate(key.expired) }}</span>
    </el-row>
  </el-space>

  <el-dialog v-model="data.showCreate" :fullscreen="fullScreenDialog">
    <el-form>
      <el-form-item label="expired">
        <el-date-picker
          v-model="data.expired"
          type="date"
          placeholder="expired"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-button @click="data.showCreate = false">Cancel</el-button>
      <el-button type="primary" @click="apply">OK</el-button>
    </el-form>
  </el-dialog>
</template>

<style scoped></style>
