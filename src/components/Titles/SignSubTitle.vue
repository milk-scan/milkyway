<template>
  <div
    :class="
      twMerge(
        'pl-0 md:!pl-6 pb-4 md:!pb-6 text-lg md:!text-2xl font-medium text-silver-700',
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
