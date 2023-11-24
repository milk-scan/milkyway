<template>
 <button
              :class="twMerge('flex items-center w-full h-[50px] px-6 bg-truffle-100 rounded-lg font-medium text-silver-600 hover:bg-truffle-200 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-truffle-300', styling)"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)"
            >
            <Icon :icon="icon" class="w-6 h-auto"/>
              <span class="grow">{{ label }}</span>
            </button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify/vue';

defineProps({
    icon: {
        type: String,
        default: 'devicon:google'
    },
    styling: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: 'Continue com Google'
    }

})
</script>