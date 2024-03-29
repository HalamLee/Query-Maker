<script setup lang="ts">
import XlsImportIcon from "~/assets/svg/XlsImport.svg";
</script>

<template>
  <div class="form__wrapper">
    <XlsImportIcon class="icon" />
  </div>
</template>

<style scoped>
.form__wrapper {
  width: 600px;
  height: 340px;
  border-radius: 24px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.icon {
  width: 96px;
}
</style>
