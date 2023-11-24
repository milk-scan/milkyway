<template>
    <router-link
      :to="route"
      :class="
        twMerge(
          'text-sm text-blueberry-600 hover:text-blueberry-500',
          styling
        )
      "
    >
      {{ label }}
    </router-link>
  </template>

  <script setup lang="ts">
    import { twMerge } from "tailwind-merge";

    defineProps({
      route: {
        type: String,
        default: "/",
      },
      label: {
        type: String,
        default: "",
      },
      styling: {
        type: String,
        default: "",
      },
    });
  </script>
