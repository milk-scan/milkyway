<template>
  <span class="text-right text-silver-950 text-base font-bold ">{{ listId }}</span>
</template>

<script setup lang="ts">
defineProps({
    listId: {
        type: String,
        default: ''
    }
})
</script>