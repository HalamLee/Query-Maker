<script setup lang="ts">
const props = defineProps({
  setActiveMenu: Function,
  sidebarItem: Array<{ index: string; title: string; link: string }>,
})

const activceMenu = ref('')

function onClickMenu(index: string) {
  activceMenu.value = index

  if (props.setActiveMenu) {
    props.setActiveMenu(index)
  }
}
</script>

<template>
  <ElMenu
    id="sidebar"
    class="sidebar-color"
    :router="true"
    :unique-opened="true"
  >
    <p id="title">Query Maker</p>

    <div class="menuItem">
      <ElMenuItem
        id="sidebar-item"
        class="sidebar-color"
        :class="item.index === activceMenu ? 'active' : ''"
        v-for="item in props.sidebarItem"
        :index="item.index"
        :route="item.link"
        @click="onClickMenu(item.index)"
      >
        <span>{{ item.title }}</span>
      </ElMenuItem>
    </div>
  </ElMenu>
</template>

<style scoped>
#sidebar {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(#sidebar-item) {
  font-size: 15px;
  font-weight: 100;
  width: 150px;
  height: 65px;
  border-radius: 14px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sidebar-item {
  &:not(.active):hover {
    color: white;
  }
}

#title {
  font-size: 22px;
  font-weight: bold;
  font-family: 'Kavoon', serif;
  color: white;
}

.sidebar-color {
  background-color: #60a383;
  color: rgb(208, 208, 208);
}

.active {
  color: #60a383;
  background-color: white;
}

.menuItem {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
