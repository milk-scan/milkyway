<template>
  <span>{{ listId }}</span>
</template>

<script setup lang="ts">
defineProps({
    listId: {
        type: String,
        default: ''
    }
})
</script>