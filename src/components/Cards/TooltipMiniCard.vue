<template>
  <VDropdown
    placement="right-start"
    :delay="{
      show: 0,
      hide: 0,
    }"
  >
    <button
      :class="
        twMerge(
          'mini-card flex flex-col items-center gap-0.5 bg-silver-100 hover:bg-silver-200 active:bg-silver-200 rounded-md p-1 w-full',
          cardStyle.cardStyle
        )
      "
    >
      <div
        :class="
          twMerge(
            'mini-container inline-flex flex-wrap gap-1 items-end justify-center',
            cardStyle.cardStyle
          )
        "
      >
        <div
          class="tiny-container inline-flex flex-wrap gap-1 justify-center items-center text-blueberry-950"
        >
          <comparison-icon-tag
            :variation="miniCard.variation"
            :color="miniCard.color"
            :class="twMerge('', cardStyle.iconStyle)"
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

    <template #popper="{ hide }" v-if="miniCard.component">
      <div class="minicards-tooltip p-3 h-dvh w-dvw md:!h-auto md:!w-auto">
        <div
          class="tooltip-header w-full inline-flex px-1 pt-0 pb-2 justify-between items-center border-b border-silver-100"
        >
          <span
            class="tooltip-header--title text-sm text-silver-500 tracking-wide"
          >
            {{ miniCard.popoverConfig.title }}
          </span>
          <button @click="hide()">
            <Icon
              icon="ph:x"
              class="h-4 w-4 text-silver-400 hover:text-silver-600 active:text-blueberry-200"
            />
          </button>
        </div>
        <div class="tooltip-body" :style="miniCard.popoverStyle">
          <component
            :is="miniCard.component"
            v-bind="miniCard.componentProps"
          />
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";
import { CardStyle, MiniCard } from "./constants";

defineProps({
  miniCard: {
    type: Object as PropType<MiniCard>,
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
