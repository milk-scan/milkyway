<template>
  <Dialog
    v-model:visible="visible"
    modal

    :breakpoints="{ '1199px': '75vw', '575px': 'w-full' }"
    v-bind="$attrs"
  >
    <p class="m-0">
      <slot></slot>
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import Dialog from "primevue/dialog";

const visible = defineModel()

defineOptions({
  inheritAttrs: false,
});
</script>
