<template>
  <span :class="twMerge('text-center text-sm text-silver-800', config.color)">{{ config.label }}</span>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { ListItem } from "./constants";

defineProps({
  config: {
    type: Object as PropType<ListItem>,
    default: () => {
      return { label: "", color: "" };
    },
  },
});
</script>
