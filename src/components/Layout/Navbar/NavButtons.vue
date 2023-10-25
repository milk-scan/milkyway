<template>
  <ul
      :class="
        twMerge(
          'flex flex-col p-4 md:p-0 mt-4 border border-truffle-100 rounded-lg bg-truffle-50 md:flex-row gap-y-1 md:gap-y-0 md:space-x-8 md:mt-0 md:border-0 md:bg-truffle-100',
          colors.primary
        )
      "
    >
    <li v-for="link, index in links" v-bind:key="index">
        <a
          :href="link.link"
          class="block py-2 pl-3 pr-4 text-white bg-truffle-200 rounded md:bg-transparent md:text-blueberry-900 md:hover:text-blueberry-500 md:p-0"
          aria-current="page"
          >{{ link.label }}</a
        >
      </li>
  </ul>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { NavButton } from "./constants";

defineProps({
  links: {
    type: Array<NavButton>,
    default: () => [],
  },
  colors: {
    default: () => {
      return {
        primary: "text-blueberry-900",
        secondary: "text-slate-300",
      };
    },
  },
});
</script>
