<template>
  <div class="milk-list-wrapper flex flex-col gap-1">
    <button
      v-for="(row, i) in milkList"
      v-bind:key="i"
      :class="twMerge('milk-list-row inline-flex flex-nowrap justify-between items-center p-1', milkListStyle)"
    >
      <template v-for="(rowConfig) in row" v-bind:key="rowConfig.index">
        <component :is="rowConfig.component" v-bind="rowConfig.props" />
      </template>
    </button>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { MilkRowConfig } from "./constants";

defineProps({
  milkListStyle: {
    type: String,
    default: ''
  },
  milkList: {
    type: Array<Array<MilkRowConfig>>,
    default: () => [],
  },
});
</script>
