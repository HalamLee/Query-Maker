<script setup lang="ts">
import type { UploadUserFile } from 'element-plus';
import XlsImportIcon from '~/assets/svg/XlsImport.svg';
import { useAPI } from '../composables/api';

const props = defineProps({
  isLoading: Boolean,
  onChangeTranslate: Function,
});

const fileList = ref<UploadUserFile[]>([]);

function onClickRemoveFile(uid: number) {
  fileList.value = fileList.value.filter((file) => {
    file.uid === uid;
  });
}

async function onClickTranslate() {
  if (props.onChangeTranslate) {
    props.onChangeTranslate(true);
    const apiReturn = await useAPI('CREATE_QUERY_TABLE', {});

    console.log(apiReturn);

    props.onChangeTranslate(false);
  }
}
</script>

<template>
  <ElUpload
    drag
    v-model:file-list="fileList"
    accept=".xls, .xlsx"
    :disabled="fileList.length !== 0"
    class="uploader">
    <div class="form__wrapper">
      <XlsImportIcon class="icon" />
    </div>

    <template #file="{ file }">
      <div class="fileInfo">
        <div>
          <ElText class="infoFont" type="info">{{ file.name }}</ElText>
        </div>
        <div>
          <ElButton
            type="danger"
            text
            :icon="ElIconDelete"
            circle
            @click="onClickRemoveFile(file.uid)" />
        </div>
      </div>
    </template>
  </ElUpload>

  <ElButtonGroup class="btnContainer">
    <ElButton class="btn" :icon="ElIconDownload" :disabled="fileList.length > 0"
      >Download Template</ElButton
    >
    <ElButton
      class="btn"
      :icon="ElIconTools"
      :loading-icon="ElIconTools"
      :disabled="fileList.length === 0"
      :loading="props.isLoading"
      @click="async () => await onClickTranslate()"
      >Translate</ElButton
    >
  </ElButtonGroup>
</template>

<style scoped lang="scss">
.uploader {
  width: 600px;
  height: fit-content;
  :deep(.el-upload-dragger) {
    width: 600px;
    height: 340px;
    background-color: #e6e6e6;
    border: none;
    border-radius: 24px;
    &:hover {
      border: 2px dashed #60a383;
    }
  }
}

.form__wrapper {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.icon {
  width: 96px;
}

.fileInfo {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}

.infoTag {
  margin-left: 5px;
}

.btnContainer {
  width: 100%;
}

.btn {
  width: 50%;
}

.infoFont {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
