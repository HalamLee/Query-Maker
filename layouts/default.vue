<script setup lang="ts">
import { SIDEBAR_ITEM } from '../constant/Constant'
</script>

<template>
  <div class="wrapper">
    <Sidebar class="menu" :sidebarItem="[...SIDEBAR_ITEM]" />
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
