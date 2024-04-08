<script setup lang="ts">
import { SIDEBAR_ITEM } from '~/constant/Constant'
</script>

<template>
  <div id="App">
    <NuxtLayout>
      <NuxtPage :currentTab="SIDEBAR_ITEM[0].title" />
    </NuxtLayout>
  </div>
</template>

<style scoped>
#App {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
