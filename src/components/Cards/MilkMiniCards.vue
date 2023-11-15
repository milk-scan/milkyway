<template>
  <div :class="twMerge('minicards grid grid-cols-2 gap-1 pt-2', cardStyle.containerStyle)">
    <button
      v-for="(miniCard, index) in miniCards"
      v-bind:key="index"
      :class="
        twMerge(
          'mini-card flex flex-col items-center gap-0.5 bg-silver-100 hover:bg-silver-200 rounded-md p-1',
          cardStyle.cardStyle
        )
      "
    >
      <div
        class="mini-container inline-flex flex-wrap gap-1 items-end justify-center"
      >
        <div
          class="tiny-container inline-flex flex-wrap gap-1 justify-center items-center text-blueberry-950"
        >
          <comparison-icon-tag
            :variation="miniCard.variation"
            :color="miniCard.color"
          />
          <span
            :class="
              twMerge(
                'text-xl font-semibold whitespace-nowrap',
                cardStyle.valueStyle
              )
            "
            >{{ miniCard.value }}</span
          >
        </div>
        <span
          :class="
            twMerge(
              'text-base font-medium whitespace-nowrap',
              cardStyle.unitStyle
            )
          "
          >{{ miniCard.unit }}</span
        >
      </div>
      <span
        :class="
          twMerge(
            'grow text-center text-sm whitespace-nowrap text-silver-700',
            cardStyle.labelStyle
          )
        "
        >{{ miniCard.label }}</span
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { CardStyle, MiniCard } from "./constants";
import ComparisonIconTag from "../Tags/ComparisonIconTag.vue";

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
      };
    },
  },
});
</script>
