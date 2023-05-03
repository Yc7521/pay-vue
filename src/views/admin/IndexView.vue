<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const nav_list = [
  // {
  //   title: "User Account",
  //   path: "/admin/user",
  // },
  {
    title: "Api Key",
    path: "/admin/key",
  },
  {
    title: "Role Request",
    path: "/admin/role",
  },
];

function nav_class(path) {
  const curr = router.currentRoute.value.path;
  let match = false;
  if (path === "/") {
    match = curr === "/";
  } else {
    match = curr.startsWith(path);
  }
  return {
    "!bg-[var(--color-surface-variant)]": match,
    "!text-[var(--color-on-surface-variant)]": match,
    "!bg-[var(--color-surface)]": !match,
    "!text-[var(--color-on-surface)]": !match,
  };
}

function replace(path) {
  if (window.history.state.back === path) {
    router.back();
    router.replace({ path });
  } else {
    router.push({ path });
  }
}
</script>

<template>
  <el-container class="h-[100%]">
    <el-header height="40px" class="text-left mt-3">
      <el-row class="h-[100%]" align="middle">
        <el-col
          class="h-[100%]"
          v-for="i in nav_list"
          :span="24 / nav_list.length"
          :key="i.path"
        >
          <el-button
            class="w-[100%] !outline-none"
            :class="nav_class(i.path)"
            size="large"
            text
            roundwindi
            @click="replace(i.path)"
          >
            {{ i.title }}
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped></style>
