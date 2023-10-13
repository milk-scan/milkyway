<template>
  <div class="greetings flex flex-row gap-1 font-bold text-2xl sm:text-3xl md:text-4xl">
    <span class="text-blueberry-900"> {{ greetings }}, </span>
    <span class="text-blueberry-500"> {{ username }} </span>
    <span class="text-blueberry-900"> ! </span>
  </div>
    <span class="text-blueberry-600 text-md sm:text-lg md:text-xl font-medium"> {{ subtitle }}</span> 
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { greetings as getGreetings } from '../../utils/dateTimeUtils'
defineProps({
  username: {
    type: String,
    default: "Andréa",
    required: true,
  },
  subtitle: {
    type: String,
    default: "Área do administrador",
    required: true,
  },
});

const greetings = computed(() => {
  return getGreetings()
})
</script>
