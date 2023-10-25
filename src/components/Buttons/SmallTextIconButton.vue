<template>
  <button
    :class="twMerge('h-[30px] inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blueberry-600 hover:bg-blueberry-400  text-white text-sm font-light tracking-wide', extraStyle)"
  >
    <Icon :icon="icon" class="w-4 h-4" />
    <span class="grow"> {{ label }} </span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { twMerge } from "tailwind-merge";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  extraStyle:{
    type: String,
    default: ""
  }
});
</script>
