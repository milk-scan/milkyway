<template>
  <Icon :icon="iconVariation" width="12" height="12" :class="iconColor" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useVariation } from "./useVariation";

const props = defineProps({
  color: {
    type: String,
    default: "",
  },
  variation: {
    type: String,
    default: "",
  },
});

const { iconColor, iconVariation } = useVariation( props.color, props.variation );
</script>
