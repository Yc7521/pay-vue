<script setup>
import { reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { deleteApiKey, listApiKey } from "@/api/system/apikey";
import { me } from "@/api/user/info";

const router = useRouter();

const keys = reactive({
  contents: [],
  page: 1,
  size: 10,
  total: 0,
});
const loading = ref(false);
const delCurr = ref(null);
let delCurrTask = 0;

onMounted(async () => {
  if ((await me()).userType !== "Admin") {
    await router.replace({
      name: "home",
    });
  }
  await load();
});
watch(
  () => keys.page,
  async () => {
    await load();
  }
);

async function load() {
  loading.value = true;
  let res = await listApiKey(keys.page - 1, keys.size);
  keys.contents = res.content;
  keys.total = res.totalElements;
  loading.value = false;
}

function showKey(key) {
  // show the first 5 chars and the last 5 chars
  return key.slice(0, 5) + "***" + key.slice(-5);
}

function showDate(time) {
  return new Date(time).toLocaleDateString();
}

// eslint-disable-next-line no-unused-vars
async function row_click(row, col, _) {
  console.log(`row_click: ${row}, ${col}`);
}

async function handleDelete(key) {
  if (delCurr.value !== key) {
    delCurr.value = key;
    if (delCurrTask) {
      clearTimeout(delCurrTask);
    }
    delCurrTask = setTimeout(() => {
      delCurr.value = null;
    }, 1500);
  } else {
    await deleteApiKey(key);
    await load();
    delCurr.value = null;
  }
}
</script>

<template>
  <el-table
    class="mt-3"
    :data="keys.contents"
    style="width: 100%"
    @row-dblclick="row_click"
  >
    <el-table-column prop="userInfo.nickname" label="Nickname" sortable />
    <el-table-column label="Key" sortable width="80">
      <template #default="scope">
        <span>{{ showKey(scope.row.key) }}</span>
      </template>
    </el-table-column>
    <!--      <el-table-column prop="username" label="Login Name" width="180" />-->
    <el-table-column label="Expired" sortable>
      <template #default="scope">
        <span>{{ showDate(scope.row.expired) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.key)"
        >
          {{ delCurr !== scope.row.key ? "Delete" : "Confirm" }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-row class="mt-3" justify="center">
    <el-pagination
      layout="prev, pager, next"
      small
      background
      hide-on-single-page
      v-model:current-page="keys.page"
      :page-size="keys.size"
      :total="keys.total"
    />
  </el-row>
</template>

<style scoped></style>
