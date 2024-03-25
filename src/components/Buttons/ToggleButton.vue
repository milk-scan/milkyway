<template>
  <div class="toggle-button-group flex justify-center">
    <SelectButton
      v-model="value"
      :options="options"
      optionLabel="value"
      dataKey="value"
      aria-labelledby="custom"
    >
      <template #option="slotProps">
        {{ slotProps.option.label }}
      </template>
    </SelectButton>
  </div>
</template>

<script lang="ts" setup>
import SelectButton from "primevue/selectbutton";

const value = defineModel();

defineProps({
  options: {
    default: () => [],
  },
});
</script>