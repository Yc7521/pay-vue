<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { UseDark } from "@vueuse/components";
import { useDark } from "@vueuse/core";
import { House, User, Back } from "@element-plus/icons-vue";

useDark();
const router = useRouter();

const data = reactive({
  links: [
    { name: "Home", path: "/index" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Show", path: "/pay/show" },
    { name: "Scan", path: "/pay/scan" },
    { name: "User", path: "/user" },
    { name: "Admin(key)", path: "/admin/key" },
    { name: "Admin(role)", path: "/admin/role" },
    { name: "Cookie Shop", path: "/test" },
  ],
});
const nav_list = [
  {
    name: "Home",
    icon: House,
    path: "/index",
  },
  {
    name: "User",
    icon: User,
    path: "/user",
  },
];

const show_nav = ref(false);
// if mobile, show nav
if (window.innerWidth < 768) {
  show_nav.value = false;
}

// eslint-disable-next-line no-unused-vars
function nav_class(path) {
  const curr = router.currentRoute.value.path;
  let match = false;
  if (path === "/") {
    match = curr === "/";
  } else {
    match = curr.startsWith(path);
  }
  return {
    // "bg-blue-500": router.currentRoute.value.path === path,
    // "text-white": router.currentRoute.value.path === path,
    // "text-blue-500": router.currentRoute.value.path !== path,

    "!bg-[var(--color-surface-variant)]": match,
    "!text-[var(--color-on-surface-variant)]": match,
    "!bg-[var(--color-surface)]": !match,
    "!text-[var(--color-on-surface)]": !match,
  };
}

function has_back() {
  // console.log(`pos: ${router.options.history.state.position}`);
  // console.log(`his.len: ${window.history.length}`);
  return router.options.history.state.position > 0;
}

function replace(path) {
  // let backlen = window.history.length - 1;
  // router.go(-backlen);
  // let times = 10;
  // while (window.history.state.back && window.history.state.back !== path) {
  //   console.log(`back: ${window.history.state.back}`);
  //   router.back();
  //   times--;
  //   if (times < 0) {
  //     break;
  //   }
  // }
  if (window.history.state.back === path) {
    router.back();
    router.replace({ path });
  } else {
    router.push({ path });
  }
}
</script>

<template>
  <nav v-if="show_nav" class="mt-3">
    <el-space spacer="|" wrap>
      <template v-for="{ name, path } in data.links" :key="path">
        <router-link :to="path">{{ name }}</router-link>
      </template>
      <UseDark v-slot="{ isDark, toggleDark }">
        <button @click="toggleDark()">Is Dark: {{ isDark }}</button>
      </UseDark>
    </el-space>
  </nav>

  <el-container class="h-[100%]">
    <el-header height="40px" class="text-left mt-3" v-if="!show_nav">
      <el-row align="middle" class="h-[100%]">
        <el-button
          class="!outline-none"
          text
          circle
          :disabled="!has_back()"
          @click="router.back()"
        >
          <el-icon :class="{ 'opacity-50': !has_back() }">
            <Back />
          </el-icon>
        </el-button>
        {{
          router.currentRoute.value.meta.title ?? router.currentRoute.value.name
        }}
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer v-if="!show_nav">
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
            round
            @click="replace(i.path)"
          >
            <el-icon :title="i.name" :size="28" :class="nav_class(i.path)">
              <component :is="i.icon" />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--el-bg-color);
}

// .dark #app {
//   background-color: var(--el-bg-color);
// }

nav {
  padding: 0 30px 30px 30px;

  a {
    font-weight: bold;
    color: #9cb3c9;

    &.router-link-exact-active {
      color: #42b983;
    }

    @media (prefers-color-scheme: light) {
      & {
        color: #2c3e50;
      }
    }
  }
}
</style>
