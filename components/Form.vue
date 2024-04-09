<script setup lang="ts">
// style component
import type { UploadUserFile } from 'element-plus'
// icon
import XlsImportIcon from '~/assets/svg/XlsImport.svg'
// composable
import { useAPI } from '../composables/api'
// constant
import { API } from '~/constant/Constant'

const props = defineProps({
  isLoading: Boolean,
  onChangeTranslate: Function,
})

const fileList = ref<UploadUserFile[]>([])

/**
 * onClickRemoveFile
 * @desc uid에 해당하는 file을 fileList에서 삭제
 * @param uid
 */
function onClickRemoveFile(uid: number): void {
  fileList.value = fileList.value.filter((file) => {
    file.uid === uid
  })
}

/**
 * onClickTranslate
 * @desc 현재 fileList에 저장된 엑셀 파일을 인자로 excelTranslate 함수 호출, 반환값으로 createTable API 호출
 */
async function onClickTranslate(): Promise<void> {
  if (props.onChangeTranslate) {
    props.onChangeTranslate(true)
    const fileData = await excelTranslate(fileList.value[0])
    console.log(fileData)

    const apiReturn = await useAPI(API.ALIAS.createTable, {
      qt_key_maser: [
        {
          Field: 'SYS_ID',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 0,
          Key: 'PK',
          Comments: 'PK',
        },
        {
          Field: 'SYS_CREATE_BY',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '최초 생성자',
        },
        {
          Field: 'SYS_MODIFY_BY',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '최종 수정자',
        },
        {
          Field: 'SYS_CREATE_DATE',
          Type: 'DATETIME',
          Length: 'N/A',
          NULL: 1,
          Comments: '생성일시',
        },
        {
          Field: 'SYS_MODIFY_DATE',
          Type: 'DATETIME',
          Length: 'N/A',
          NULL: 1,
          Comments: '최종 수정일시',
        },
        {
          Field: 'SYS_TYPE',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '-',
        },
        {
          Field: 'SYS_FLAG',
          Type: 'CHAR',
          Length: 1,
          NULL: 1,
          Comments: '활성여부\n(활성 : 1 / 비활성 : 0)',
        },
        {
          Field: 'TL_APL_ID',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '어플리케이션 아이디',
        },
        {
          Field: 'TL_ACC_ID',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '어카운트 아이디',
        },
        {
          Field: 'FK_DTS_ID',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Key: 'FK',
          Comments: '(FK) DataSource SYS_ID',
        },
        {
          Field: 'KEY_CODE',
          Type: 'VARCHAR',
          Length: 250,
          NULL: 1,
          Comments: '암호화 키 명',
        },
        {
          Field: 'KEY_DESC',
          Type: 'VARCHAR',
          Length: 250,
          NULL: 1,
          Comments: '암호화 키 설명',
        },
        {
          Field: 'ENC_TYPE',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '암호화 타입',
        },
        {
          Field: 'ENC_ALGO',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: '암호화 알고리즘',
        },
        {
          Field: 'ENC_KEY',
          Type: 'VARCHAR',
          Length: 4000,
          NULL: 1,
          Comments: '대칭키',
        },
        {
          Field: 'ENC_DATA_KEY',
          Type: 'VARCHAR',
          Length: 4000,
          NULL: 1,
          Comments: 'kms data key',
        },
        {
          Field: 'KMS_ALIAS',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: 'KMS Alias',
        },
        {
          Field: 'MNG_TYPE',
          Type: 'VARCHAR',
          Length: 32,
          NULL: 1,
          Comments: 'system / application / external',
        },
        {
          Field: 'ENV_CODE',
          Type: 'VARCHAR',
          Length: 10,
          NULL: 1,
          Comments: '암호화 환경 코드 / provisioning...',
        },
        {
          Field: 'AC_FLAG',
          Type: 'CHAR',
          Length: 1,
          NULL: 1,
          Comments: 'admin console',
        },
      ],
    })

    console.log(`API Return : ${apiReturn.data.success}`)
    props.onChangeTranslate(false)

    useRouter().push({ path: '/result', query: apiReturn.data.query })
  }
}

/**
 * excelTranslate
 * @desc 인자로 받은 excel 파일을 json으로 변환하여 반환
 * @module [sheetjs](https://sheetjs.com/)
 */
async function excelTranslate(file: UploadUserFile): Promise<void> {}
</script>

<template>
  <ElUpload
    drag
    v-model:file-list="fileList"
    accept=".xls, .xlsx"
    :disabled="fileList.length !== 0"
    class="uploader"
  >
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
            style="margin-right: 15px"
            type="danger"
            text
            :icon="ElIconDelete"
            circle
            @click="onClickRemoveFile(file.uid)"
          />
        </div>
      </div>
    </template>
  </ElUpload>

  <ElButtonGroup class="btnContainer">
    <ElButton
      class="btn"
      :icon="ElIconDownload"
      :disabled="fileList.length > 0"
    >
      Download Template
    </ElButton>
    <ElButton
      class="btn"
      :icon="ElIconTools"
      :loading-icon="ElIconTools"
      :disabled="fileList.length === 0"
      :loading="props.isLoading"
      @click="onClickTranslate"
    >
      Translate
    </ElButton>
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
