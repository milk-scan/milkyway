<template>
    <button
      :id="btnId"
      :data-tooltip-target="tooltip != '' ? tooltipId() : null"
      :class="twMerge('px-6 py-3 border rounded-md inline-flex flex-nowrap items-center gap-2', buttonStyle, extraButtonStyle)"
    >
      <Icon :icon="icon" :class="twMerge(buttonIconStyle, 'w-6 h-6')" />
      <span :class="twMerge(buttonTextStyle, 'grow whitespace-nowrap')"> {{ text }} </span>
    </button>
    <div
      :id="tooltipId()"
      v-if="tooltip != ''"
      role="tooltip"
      :class="
        twMerge(
          'absolute z-10 invisible inline-block px-3 py-2 text-sm transition-opacity duration-300 rounded-lg shadow-sm tooltip',
          tooltipStyle
        )
      "
    >
      {{ tooltip }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Icon } from "@iconify/vue";
  import { useVariation } from "./useVariation";
  import { twMerge } from "tailwind-merge";
  
  const props = defineProps({
    btnId: {
      type: String,
      default: "buttonIdDefault",
      required: true,
    },
    tooltip: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    text: {
    type: String,
    default: "",
  },
    variation: {
      type: String,
      default: "dark",
    },
    extraButtonStyle: {
      type: String,
      default: "",
    },
    
  });
  
  const tooltipId = () => {
    return props.btnId + "-tooltip";
  };
  
  const { buttonStyle, buttonIconStyle, buttonTextStyle, tooltipStyle } = useVariation(
    props.variation
  );
  </script>
  