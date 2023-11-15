<template>
  <div class="inline-flex gap-1 items-center">
    <span class="text-sm font-medium text-silver-950">
      {{ config.label }}
    </span>
    <comparison-icon-tag :variation="config.variation" :color="config.color" class="h-2 w-2"/>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ListVariation } from "./constants";

import ComparisonIconTag from "../Tags/ComparisonIconTag.vue";

defineProps({
  config: {
    type: Object as PropType<ListVariation>,
    default: () => {
      return { variation: "circle", color: "yellow", label: "label" };
    },
  },
});
</script>
