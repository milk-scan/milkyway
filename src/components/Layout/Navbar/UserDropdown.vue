<template>
  <div
    class="z-50 hidden my-4 text-base list-none rounded-lg shadow  tracking-normal font-normal"
    id="user-dropdown"
  >
    <ul
      class="min-w-[180px] px-2.5 py-3 inline-flex flex-col justify-center items-left gap-1.5 bg-truffle-50 rounded-lg shadow"
      aria-labelledby="user-menu-button"
    >
      <li v-for="link, index in links" v-bind:key="index" class="inline-flex items-center px-2 py-1.5 gap-2 rounded-md text-sm text-blueberry-950 hover:bg-truffle-200/80">
        <Icon v-if="link.icon" :icon="link.icon" class="w-4 h-4" />
        <a
          :href="link.link"
          class="grow"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { UserDropdownItem } from "./constants";
import { Icon } from "@iconify/vue";

defineProps({
  links: {
    type: Array<UserDropdownItem>,
    default: () => [],
  },
});
</script>
