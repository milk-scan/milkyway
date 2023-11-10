<template>
  <a :href="redirect.link" :title="redirect.label"><Icon icon="tabler:external-link" class="w-4 h-4 text-blueberry-400 hover:text-blueberry-200" /></a>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { RedirectIconButton } from "./constants";
import { Icon } from "@iconify/vue";

defineProps({
  redirect: {
    type: Object as PropType<RedirectIconButton>,
    default: () => {
      return { label: "", link: "/" };
    },
  },
});
</script>
