<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    v-bind="$attrs"
  >
    <p class="m-0">
      <slot></slot>
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";

const visible = ref(false);

defineOptions({
  inheritAttrs: false,
});

defineExpose({ visible });
</script>
