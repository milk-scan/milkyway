<template>
  <ul
    class="flex flex-col md:flex-row md:space-x-8 gap-y-1 md:gap-y-0 p-4 md:p-0 mt-4 md:mt-0 border md:border-0 border-truffle-100 rounded-lg bg-truffle-50 md:bg-transparent"
  >
    <li v-for="(link, index) in links" v-bind:key="index">
      <a
        :href="link.link"
        :class="
          twMerge(
            'block py-2 pl-3 pr-4 md:p-0 rounded bg-blueberry-700 text-blueberry-200 tracking-wide font-light hover:text-blueberry-500',
            colors.primary
          )
        "
        aria-current="page"
        >{{ link.label }}
      </a>
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
        primary: "",
      };
    },
  },
});

</script>
