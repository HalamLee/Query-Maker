<script setup lang="ts">
const props = defineProps({
  setActiveItem: Function,
});
</script>

<template>
  <div id="page">
    <VanButton text="Test" @click="props.setActiveItem(2)" />
  </div>
</template>

<style scoped>
#page {
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
