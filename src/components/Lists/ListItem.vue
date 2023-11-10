<template>
  <span>{{ config.label }}</span>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ListItem } from "./constants";

defineProps({
  config: {
    type: Object as PropType<ListItem>,
    default: () => {
      return { label: "" };
    },
  },
});
</script>
