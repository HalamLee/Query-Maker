<script setup lang="ts">
import { Constant } from "~/constant/Constant";

let activeItem: Ref<number> = ref(0);

function setActiveItem(menuIndex: number) {
  console.log("menuIndex :", menuIndex);
  activeItem.value = menuIndex;
}
</script>

<template>
  <div id="App">
    <Sidebar :activeItem="activeItem" :sidebarItem="[...Constant.SIDEBAR_ITEM]" />
    <NuxtPage :currentTab="Constant.SIDEBAR_ITEM[0].title" :setActiveItem="setActiveItem" />
  </div>
</template>

<style scoped>
#App {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>
