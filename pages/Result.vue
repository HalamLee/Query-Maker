<script setup lang="ts">
import PasteIcon from '~/assets/svg/Paste.svg'

const data = ref<string>('')

const clickPasteBtn = () => {
  navigator.clipboard
    .writeText(data.value)
    .then(() => {
      ElMessage({
        message: 'Copied!',
        type: 'success',
        customClass: 'copied-message',
      })
    })
    .catch((err) => {
      ElMessage.error('Failed..')
    })
}

onMounted(() => {
  const query = Object.values(useRoute().query).join('')
  data.value = query
})
</script>
<template>
  <div class="result__wrapper">
    <div class="outer">
      <div class="paste-icon__wrapper" @click="clickPasteBtn">
        <PasteIcon class="icon" />
      </div>
      <div class="container">
        <div class="inner">
          {{ data }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.result__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .outer {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .container {
    height: 80%;
    background-color: #e6e6e6;
    border-radius: 24px;
    padding: 20px;
    font-family: 'Nanum Gothic Coding', monospace;
    word-spacing: 5px;
    line-height: 1.5;

    .inner {
      height: 100%;
      padding-right: 20px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
        background-color: white;
        border-radius: 14px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #60a383;
        border-radius: 14px;
      }
    }
  }

  .paste-icon__wrapper {
    width: 54px;
    height: 50px;
    background-color: #60a383;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 30px;

    .icon {
      width: 35px;
    }
  }
}
.copied-message {
  background-color: red;
  font-family: 'Roboto', sans-serif !important;
}
</style>
