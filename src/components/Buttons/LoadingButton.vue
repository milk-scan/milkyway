<template>
    <button
                  form="signInForm"
                  :class="twMerge('w-full h-[50px] inline-flex justify-center items-center gap-2.5 py-5 text-silver-50 tracking-wide rounded-lg border border-blueberry-700 hover:border-blueberry-500 active:border-blue-600 bg-blueberry-700 hover:bg-blueberry-500 active:bg-blue-600', styling)"
                >
                  <template v-if="fetching">
                    <Icon icon="line-md:loading-twotone-loop" />
                  </template>
                  <template v-else> {{ label }} </template>
    </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { twMerge } from 'tailwind-merge';

defineProps({
    fetching: {
        type: Boolean,
        default: false
    },
    styling: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    }

})
</script>