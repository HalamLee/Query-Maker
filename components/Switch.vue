<script setup lang="ts">
const props = defineProps({
  mode: Array<String>,
});

const checked = ref(false);
</script>

<template>
  <div>
    <input
      class="switch-checkbox"
      id="switch-checkbox"
      :checked="checked"
      @change="checked = !checked"
      type="checkbox" />
    <label class="switch-label" for="switch-checkbox">
      <div class="switch-content">
        <div :class="{ active: !checked }">
          {{ props.mode && props.mode[0] }}
        </div>
        <div :class="{ active: checked }">
          {{ props.mode && props.mode[1] }}
        </div>
      </div>
      <span class="switch-button"></span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.switch-label {
  display: flex;
  align-items: center;
  background: #60a383;
  width: 320px;
  height: 58px;
  border-radius: 28px;
  position: relative;
  cursor: pointer;
  padding: 8px;
  color: white;
}

.switch-button {
  background-color: white;
  width: 136px;
  height: 40px;
  border-radius: 18px;
  position: absolute;
  transition: 0.2s;
  left: 8px;
  font-size: 18px;
}

.switch-content {
  display: flex;
  gap: 30px;
  width: 100%;
  z-index: 2;
  font-size: 16px;

  div {
    width: 136px;
    text-align: center;
  }
}

.switch-checkbox:checked + .switch-label .switch-button {
  left: calc(100% - 8px);
  transform: translateX(-100%);
}

.switch-checkbox {
  width: 0;
  height: 0;
  display: hidden;
}

.active {
  color: #60a383;
}
</style>
