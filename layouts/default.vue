<script setup lang="ts">
import { Constant } from '../constant/Constant';

let activeMenu: string;
function setActiveMenu(menuIndex: number) {
  activeMenu = Constant.SIDEBAR_ITEM[menuIndex].title;
}
</script>

<template>
  <div class="wrapper">
    <Sidebar
      :setActiveMenu="setActiveMenu"
      :sidebarItem="[...Constant.SIDEBAR_ITEM]" />
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
