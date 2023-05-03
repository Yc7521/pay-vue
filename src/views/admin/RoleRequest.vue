<script setup>
import { reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { me } from "@/api/user/info";
import { listRoleRequest, rejectRoleRequest } from "@/api/roleRequest/index";
import {
  approveRoleRequest,
  listRoleRequestByState,
} from "@/api/roleRequest/index.js";
import UserInfo from "@/components/UserInfo.vue";

const router = useRouter();

const reqs = reactive({
  state: "Unprocessed",
  contents: [],
  page: 1,
  size: 10,
  total: 0,
});
const userInfo = reactive({
  show: false,
  user: null,
});
const loading = ref(false);
const approveCurr = ref(null);
const rejectCurr = ref(null);
let approveCurrTask = 0;
let rejectCurrTask = 0;
const options = [
  {
    value: "Unprocessed",
    label: "Unprocessed",
  },
  {
    value: "Permit",
    label: "Permit",
  },
  {
    value: "Reject",
    label: "Reject",
  },
  {
    value: "CanReapply",
    label: "CanReapply",
  },
];

onMounted(async () => {
  if ((await me()).userType !== "Admin") {
    await router.replace({
      name: "home",
    });
  }
  await load();
});
watch(
  () => reqs.state,
  async () => {
    await load();
  }
);
watch(
  () => reqs.page,
  async () => {
    await load();
  }
);

async function load() {
  loading.value = true;
  let res;
  if (reqs.state === "") {
    res = await listRoleRequest(reqs.page - 1, reqs.size);
  } else {
    res = await listRoleRequestByState(reqs.state, reqs.page - 1, reqs.size);
  }
  reqs.contents = res.content;
  reqs.total = res.totalElements;
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
  if (col.label === "Applicant") {
    userInfo.user = row.applicant;
    userInfo.show = true;
  }
}

async function handleApprove(id) {
  if (approveCurr.value !== id) {
    approveCurr.value = id;
    if (approveCurrTask) {
      clearTimeout(approveCurrTask);
    }
    approveCurrTask = setTimeout(() => {
      approveCurr.value = null;
    }, 1500);
  } else {
    await approveRoleRequest(id);
    await load();
    approveCurr.value = null;
  }
}
async function handleReject(id, force = false) {
  if (rejectCurr.value !== id) {
    rejectCurr.value = id;
    if (rejectCurrTask) {
      clearTimeout(rejectCurrTask);
    }
    rejectCurrTask = setTimeout(() => {
      rejectCurr.value = null;
    }, 1500);
  } else {
    await rejectRoleRequest(id, force);
    await load();
    rejectCurr.value = null;
  }
}
</script>

<template>
  <el-row align="middle">
    State:
    <el-select class="ml-3" v-model="reqs.state" clearable placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-row>

  <el-table
    class="mt-3"
    :data="reqs.contents"
    style="width: 100%"
    @row-click="row_click"
  >
    <el-table-column prop="applicant.nickname" label="Applicant" sortable />
    <el-table-column prop="name" label="Name" sortable />
    <el-table-column label="id card" sortable width="80">
      <template #default="scope">
        <span>{{ showKey(scope.row.idCard) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Create" sortable>
      <template #default="scope">
        <span>{{ showDate(scope.row.create) }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="state" label="statS" sortable />
    <el-table-column label="Operations">
      <template #default="scope">
        <template v-if="scope.row.state === 'Unprocessed'">
          <el-row class="my-1">
            <el-button
              size="small"
              type="primary"
              @click="handleApprove(scope.row.id)"
            >
              {{ approveCurr !== scope.row.id ? "Approve" : "Confirm" }}
            </el-button>
          </el-row>
          <el-row class="my-1">
            <el-button
              size="small"
              type="danger"
              @click="handleReject(scope.row.id)"
            >
              {{ rejectCurr !== scope.row.id ? "Reject" : "Confirm" }}
            </el-button>
          </el-row>
        </template>
        <template v-else-if="scope.row.state === 'CanReapply'">
          <el-row class="my-1">
            <el-button
              size="small"
              type="danger"
              @click="handleReject(scope.row.id, true)"
            >
              {{ rejectCurr !== scope.row.id ? "Reject" : "Confirm" }}
            </el-button>
          </el-row>
        </template>
      </template>
    </el-table-column>
  </el-table>

  <el-row class="mt-3" justify="center">
    <el-pagination
      layout="prev, pager, next"
      small
      background
      hide-on-single-page
      v-model:current-page="reqs.page"
      :page-size="reqs.size"
      :total="reqs.total"
    />
  </el-row>

  <UserInfo v-model="userInfo.show" :user="userInfo.user" />
</template>

<style scoped></style>
