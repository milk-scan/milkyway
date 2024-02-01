<template>
  <div
    :class="
      twMerge('minicards grid grid-cols-2 gap-1 pt-2 bg-green-300', cardStyle.containerStyle)
    "
  >
    <template
      v-for="miniCard in miniCards"
      v-bind:key="miniCard.color + miniCard.value"
    >
      <tooltip-mini-card :mini-card="miniCard" :card-style="cardStyle" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { CardStyle, MiniCard } from "./constants";

import TooltipMiniCard from "./TooltipMiniCard.vue";

defineProps({
  miniCards: {
    type: Array<MiniCard>,
    default: () => [],
  },
  cardStyle: {
    type: Object as PropType<CardStyle>,
    default: () => {
      return {
        containerStyle: "",
        cardStyle: "",
        valueStyle: "",
        unitStyle: "",
        labelStyle: "",
        iconStyle: "",
      };
    },
  },
});
</script>
