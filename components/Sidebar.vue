<script setup lang="ts">
const props = defineProps({
  sidebarItem: Array<{ index: string; title: string; link: string }>,
})

const activeMenu = ref('')

const route = useRoute()
activeMenu.value = route.path?.slice(1).toUpperCase()

function onClickMenu(title: string) {
  activeMenu.value = title
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
        v-for="item in props.sidebarItem"
        :class="item.title === activeMenu ? 'active' : ''"
        :index="item.index"
        :route="item.link"
        @click="onClickMenu(item.title)"
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
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 1px;
  width: 130px;
  height: 50px;
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
  gap: 20px;
  margin-top: 30px;
}
</style>
