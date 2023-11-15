<template>
  <div class="minicards grid grid-cols-2 gap-1 pt-2">
    <button
      v-for="(miniCard, index) in miniCards"
      v-bind:key="index"
      class="mini-card flex flex-col items-center gap-0.5 bg-silver-100 hover:bg-silver-200 rounded-md p-1"
    >
      <div class="mini-container inline-flex flex-wrap gap-1 items-end justify-center">
        <div
          class="tiny-container inline-flex flex-wrap gap-1 justify-center items-center text-blueberry-950"
        >
          <comparison-icon-tag :variation="miniCard.variation" :color="miniCard.color"/>
          <span class="text-xl font-semibold whitespace-nowrap">{{ miniCard.value }}</span>
        </div>
        <span class="text-base font-medium whitespace-nowrap">{{ miniCard.unit }}</span>
      </div>
      <span class="grow text-center text-sm whitespace-nowrap text-silver-700">{{
        miniCard.label
      }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { MiniCard } from './constants';
import ComparisonIconTag from '../Tags/ComparisonIconTag.vue';

defineProps({
  miniCards: {
    type: Array<MiniCard>,
    default: () => []
  }
})
</script>
