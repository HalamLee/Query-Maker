<script setup lang="ts">
import { SIDEBAR_ITEM } from '../constant/Constant'

let activeMenu: string
function setActiveMenu(menuIndex: number) {
  activeMenu = SIDEBAR_ITEM[menuIndex].title
}
</script>

<template>
  <div class="wrapper">
    <Sidebar
      class="menu"
      :setActiveMenu="setActiveMenu"
      :sidebarItem="[...SIDEBAR_ITEM]"
    />
    <slot class="main" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.menu {
  width: 13vw;
}
</style>
