<template>
  <button
    :id="btnId"
    :data-tooltip-target="tooltipId()"
    :class="twMerge('p-2.5 border rounded-lg', buttonStyle)"
  >
    <span :class="buttonTextStyle"> {{ text }} </span>
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
  text: {
    type: String,
    default: "",
  },
  variation: {
    type: String,
    default: "dark",
  },
});

const tooltipId = () => {
  return props.btnId + "-tooltip";
};

const { buttonStyle, buttonTextStyle, tooltipStyle } = useVariation(
  props.variation
);
</script>
