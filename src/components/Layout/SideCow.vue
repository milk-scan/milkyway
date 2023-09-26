<template>
    <main class="grid grid-cols-12 h-screen">
        <div :class="twMerge('cow-placement col-span-2 bg-slate-600 text-white', cowPlacement)">
            cow here
        </div>
        <div :class="twMerge('bg-white col-span-10 text-blue-300', contentPlacement)">
            <slot></slot>
        </div>
    </main>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
    smallCow: boolean
}>();

const cowPlacement = props.smallCow ? 'col-span-2' : 'col-span-7'
const contentPlacement = props.smallCow ? 'col-span-10' : 'col-span-5'
</script>