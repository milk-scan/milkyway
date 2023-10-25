<template>
   <span class="uppercase text-xl font-medium text-silver-900">{{ title }}</span> 
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>