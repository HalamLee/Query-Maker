<script setup lang="ts">
const mode = ref('File Upload');

const changeMode = (name: string) => {
  mode.value = name;
};
</script>

<template>
  <div class="create__wrapper">
    <Switch :mode="['File Upload', 'Editor']" @change-mode="changeMode" />
    <div v-if="mode === 'File Upload'" class="form">
      <span class="form-text"
        >클릭 또는 드래그를 통해 엑셀 파일을 업로드해 주세요.</span
      >
      <Form />
    </div>
    <div v-else class="notification">
      <UnsupportedNotification />
    </div>
  </div>
</template>

<style scoped>
.create__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}

.form {
  margin-top: 80px;
  text-align: center;
  div {
    margin-top: 24px;
  }
}

.form-text {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: #60a383;
}

.notification {
  margin-top: 200px;
}
</style>
