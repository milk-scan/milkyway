<template>
  <div
    :class="
      twMerge(
        'p-[25px] flex flex-col gap-2.5 justify-start rounded-[20px] shadow bg-white',
        styling.card
      )
    "
  >
    <div
      class="card-header inline-flex flex-wrap justify-between items-center gap-2"
      v-if="!headerless"
    >
      <card-title :title="header.title" class="grow" />
      <filter-button v-if="header.filter" />
      <slot name="header-slot"></slot>
      <redirect-icon-button :redirect="header.redirect" />
    </div>
    <slot name="card-slot"></slot>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import CardTitle from "../Titles/CardTitle.vue";
import FilterButton from "../Buttons/FilterButton.vue";
import RedirectIconButton from "../Buttons/RedirectIconButton.vue";

defineProps({
  header: {
    default: {
      title: "",
      filter: false,
      redirect: {
        label: "",
        link: "/",
      },
    },
  },
  headerless: {
    type: Boolean,
    default: false
  },
  styling: {
    default: {
      card: "",
    },
  },
});
</script>
