<template>
  <div class="progress-container">
    <div :class="twMerge('progress-task--container flex justify-between mb-1 font-medium text-blue-700', styling.label)">
      <span class="progress-task--label text-base"
        >{{ title }}</span
      >
      <span class="progress-task--number text-sm">{{ progress }}%</span>
    </div>
    <div :class="twMerge('progress-bar--container w-full bg-gray-200 rounded-full h-2.5', styling.bar.background)">
      <div :class="twMerge('progress-bar--progress bg-blue-600 h-2.5 rounded-full', styling.bar.progress)" :style="{width: `${progress}%`}"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
type Styling = {
  label: string;
  bar: {
    background: string;
    progress: string;
  };
};

defineProps({
  title: {
    type: String,
    default: 'Tarefa'
  },
  progress: {
    type: Number,
    default: 45
  },
  styling: {
    type: Object as PropType<Styling>,
    default: () => {
      return {
        label: "",
        bar: {
          background: "",
          progress: "",
        },
      };
    },
  },
});
</script>
