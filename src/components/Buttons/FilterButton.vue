<template>
  <button
    class="h-[30px] inline-flex items-center gap-2 px-3 py-1 rounded-md focus:bg-blueberry-200/50 border border-blueberry-500 hover:border-blueberry-300 focus:border-blueberry-600 text-blueberry-500 hover:text-blueberry-300 focus:text-blueberry-600 text-sm"
  >
    <Icon icon="mingcute:filter-line" class="w-4 h-4" />
    <span class="grow"> Filtros </span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
