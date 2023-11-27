<template>
  <div
    :class="
      twMerge(
        'welcome-text w-full md:!w-[218px] text-center md:!text-left text-blueberry-800 text-2xl md:!text-4xl font-medium md:!font-bold',
        styling
      )
    "
  >
    {{ title }}
  </div>
</template>
<script setup lang="ts">
import { twMerge } from "tailwind-merge";

defineProps({
  title: {
    type: String,
    default: "",
  },
  styling: {
    type: String,
    default: "",
  },
});
</script>
