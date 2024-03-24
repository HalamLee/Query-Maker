<script setup lang="ts">
const props = defineProps({
  setActiveMenu: Function,
  sidebarItem: Array<{ title: string; link: string }>,
});

const activeMenu = ref(0);
</script>

<template>
  <VanSidebar id="sidebar" class="sidebar-color" v-model="activeMenu">
    <p id="title">QueryMaker</p>

    <VanSidebarItem
      class="sidebar-color"
      v-for="item in props.sidebarItem"
      :title="item.title"
      :to="item.link"
      @click="props.setActiveMenu!(activeMenu)"
    />
  </VanSidebar>
</template>

<style scoped>
#sidebar {
  width: 12%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title {
  font-size: 22px;
  font-weight: bold;
}

.sidebar-color {
  background-color: #60a383;
  color: white;
}
</style>
