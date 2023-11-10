<template>
  <span
    :class="
      twMerge(
        'h-min min-w-[60px] inline-flex justify-center px-4 py-0.5 rounded-full align-middle text-center text-xs tracking-wide text-silver-50',
        config.color
      )
    "
  >
    {{ config.label }}
  </span>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { ListTag } from "./constants";

defineProps({
  config: {
    type: Object as PropType<ListTag>,
    default: () => {
      return { color: "bg-slate-800", label: "label" };
    },
  },
});
</script>
