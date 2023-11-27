<template>
    <div :class="twMerge('flex items-center h-full', styling.component)">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        :class="
          twMerge(
            'w-4 h-4 cursor-pointer rounded bg-inherit border-truffle-400 text-blueberry-500 focus:ring-0 focus:ring-transparent',
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
        <slot></slot>
      </label>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType } from "vue";
  import { twMerge } from "tailwind-merge";
  
  type CheckStyle = {
    input: string;
    label: string;
    component: string;
  };
  
  defineProps({
    styling: {
      type: Object as PropType<CheckStyle>,
      default: () => {
        return {
          input: "",
          label: "",
          component: ""
        };
      },
    },
  });
  </script>
  