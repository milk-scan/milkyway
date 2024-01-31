<template>
   <span :class="twMerge('uppercase text-2xl font-medium text-silver-900', styling)">{{ title }}</span> 
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
defineProps({
    title: {
        type: String,
        default: ''
    },
    styling: {
        type: String,
        default: ''
    }
})
</script>