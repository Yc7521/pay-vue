<script setup>
import { UseDark } from "@vueuse/components";

const data = reactive({
  links: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Show", path: "/pay/show" },
    { name: "Scan", path: "/pay/scan" },
    { name: "User", path: "/user/info" },
    { name: "Cookie Shop", path: "/test" },
  ],
});

const show_nav = ref(true);
// if mobile, show nav
if (window.innerWidth > 768) {
  // show_nav.value = false;
}
</script>

<template>
  <nav v-if="show_nav">
    <el-space spacer="|" wrap>
      <template v-for="{ name, path } in data.links" :key="path">
        <router-link :to="path">{{ name }}</router-link>
      </template>
      <UseDark v-slot="{ isDark, toggleDark }">
        <button @click="toggleDark()">Is Dark: {{ isDark }}</button>
      </UseDark>
    </el-space>
  </nav>

  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-main><router-view /></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #abb2bf;
}

@media (prefers-color-scheme: light) {
  #app {
    color: #2c3e50;
  }
}

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
