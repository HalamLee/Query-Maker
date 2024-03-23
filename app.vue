<script setup lang="ts">
import { Constant } from "~/constant/Constant";

let activeMenu: string;
function setActiveMenu(menuIndex: number) {
  activeMenu = Constant.SIDEBAR_ITEM[menuIndex].title;

  console.log(menuIndex);
}
</script>

<template>
  <div id="App">
    <Sidebar :setActiveMenu="setActiveMenu" :sidebarItem="[...Constant.SIDEBAR_ITEM]" />

    <NuxtPage :currentTab="Constant.SIDEBAR_ITEM[0].title" />
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
