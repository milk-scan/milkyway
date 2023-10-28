<template>
  <div
    class="legends pt-2 inline-flex gap-1.5 justify-center items-center text-xs"
  >
    <div
      v-for="(legend, index) in legends"
      v-bind:key="index"
      class="legend inline-flex gap-1 items-center"
    >
      <div :class="twMerge('rounded-full w-2 h-2', legend.color)"></div>
      <span class="whitespace-nowrap">{{ legend.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { legend } from "./constants";

defineProps({
  legends: {
    type: Array<legend>,
    default: () => [],
  },
});
</script>
