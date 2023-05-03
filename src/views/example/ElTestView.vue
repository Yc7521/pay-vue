<script setup>
const name = "ElTestView";

const nav = [];
const data = reactive({
  current: "",
});

for (let i = 0; i < 10; i++) {
  nav.push({
    name: `test${i}`,
    path: `/test${i}`,
  });
}

function go(tag) {
  data.current = tag.name;
  // router.push({
  //   name: tag,
  // });
}
</script>

<template>
  <h2>{{ name }}</h2>
  <nav class="mt-3">
    <el-row justify="center">
      <el-space wrap>
        <el-button
          v-for="i in nav"
          :key="i.name"
          :class="{ '!bg-black': data.current === i.name }"
          @click="go(i)"
          round
          text
        >
          {{ i.name }}
        </el-button>
      </el-space>
    </el-row>
  </nav>

  <el-input :model-value="data.current" />
</template>

<style scoped></style>
