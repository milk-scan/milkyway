<template>
  <div class="main-section">
    <div name="content-section" class="flex flex-col">
      <div
        :class="
          twMerge('upper-container sm:h-auto md:h-[20vh] pb-[64px]', upperSectionColor)   
        "
        style="display: grid; grid-template-columns: repeat(22, 1fr)"
      >
        <slot name="upper-section"></slot>
      </div>
      <div
        :class="twMerge('lower-container ', lowerSectionColor)"
        style="display: grid; grid-template-columns: repeat(22, 1fr)"
      >
        <slot name="lower-section"></slot>
      </div>
    </div>
    <!-- <div
      name="bg-filler"
      :class="['absolute  -z-10', lowerSectionColor]"
      style="height: calc(100vh - 64px)"
    >
      <div
        name="bg-filler-top"
        :class="['w-full', upperSectionColor]"
        style="height: 30vh"
      ></div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";

const props = defineProps({
  colors: {
    default: () => {
      return {
        primary: "bg-blueberry-700",
        secondary: "bg-truffle-100",
      };
    },
  },
  inverted: {
    type: Boolean,
    default: false,
  },
});

const upperSectionColor = computed(() => {
  return props.inverted ? props.colors.secondary : props.colors.primary;
});

const lowerSectionColor = computed(() => {
  return props.inverted ? props.colors.primary : props.colors.secondary;
});
</script>
