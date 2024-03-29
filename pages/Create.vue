<script setup lang="ts">
const mode = ref("File Upload");
const isLoading = ref(false);

const changeMode = (name: string) => {
  mode.value = name;
};

function onChangeTranslate(state: boolean) {
  console.log(state);
  isLoading.value = state;
}
</script>

<template>
  <div class="create__wrapper" v-loading="isLoading">
    <Switch :mode="['File Upload', 'Editor']" @change-mode="changeMode" />
    <div v-if="mode === 'File Upload'" class="form">
      <span class="form-text"
        >클릭 또는 드래그를 통해 엑셀 파일을 업로드해 주세요.</span
      >
      <Form :isLoading="isLoading" :onChangeTranslate="onChangeTranslate" />
    </div>
    <div v-else class="notification">
      <UnsupportedNotification />
    </div>
  </div>
</template>

<style scoped>
.create__wrapper {
  width: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  text-align: center;
  div {
    margin-top: 24px;
  }
}

.form-text {
  margin-bottom: 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  color: #60a383;
}

.notification {
  margin-top: 200px;
}
</style>
