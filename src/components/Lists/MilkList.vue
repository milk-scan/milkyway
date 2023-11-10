<template>
  <div class="milk-list-wrapper flex flex-col gap-1">
    <button
      v-for="(row, i) in milkList"
      v-bind:key="i"
      class="milk-list-row inline-flex flex-nowrap p-1"
    >
      <template v-for="(rowConfig, j) in row" v-bind:key="j">
        <component :is="rowConfig.component" v-bind="rowConfig.props" />
      </template>
    </button>
  </div>
</template>

<script setup lang="ts">
import { MilkRowConfig } from "./constants";

defineProps({
  milkList: {
    type: Array<Array<MilkRowConfig>>,
    default: () => [],
  },
});
</script>
