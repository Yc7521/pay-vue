<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/pay/show">Show</router-link> |
    <router-link to="/pay/scan">Scan</router-link>
  </nav>
  <router-view />
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
  padding: 30px;

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
