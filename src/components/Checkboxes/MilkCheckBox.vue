<template>
    <div class="flex items-center h-full">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        :class="
          twMerge(
            'w-4 h-4 cursor-pointer rounded border-truffle-400 text-blueberry-500 focus:ring-0 focus:ring-transparent',
            styling.input
          )
        "
      />
      <label
        for="default-checkbox"
        :class="
          twMerge(
            'ms-2 text-sm font-medium text-truffle-900',
            styling.label
          )
        "
      >
        {{ label }}
      </label>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType } from "vue";
  import { twMerge } from "tailwind-merge";
  
  type CheckStyle = {
    input: string;
    label: string;
  };
  
  defineProps({
    label: {
      type: String,
      default: "",
    },
    styling: {
      type: Object as PropType<CheckStyle>,
      default: () => {
        return {
          input: "",
          label: "",
        };
      },
    },
  });
  </script>
  