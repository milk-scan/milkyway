<template>
  <div class="inline-flex gap-2">
    <span class="text-xl font-medium tracking-tight text-silver-950">
      {{ config.label }}
    </span>
    <comparison-icon-tag :variation="config.variation" :color="config.color" />
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
