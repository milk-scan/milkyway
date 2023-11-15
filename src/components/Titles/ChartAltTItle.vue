<template>
    <div
      class="bg-silver-100 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
    >
      <span class="text-blueberry-800 text-xl font-medium">{{ title }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
      title: {
          type: String,
          default: ''
      }
  })
  </script>