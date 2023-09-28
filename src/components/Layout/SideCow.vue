<template>
    <main class="grid grid-cols-12 h-screen">
        <div :class="twMerge('cow-placement col-span-2 bg-blueberry-700 flex justify-center', cowPlacement)">
           <slot name="image"></slot>
        </div>
        <div :class="twMerge('bg-sil bg-silver-50 col-span-10', contentPlacement)">
            <slot name="content"></slot>
        </div>
    </main>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
    smallCow: boolean
}>();

const cowPlacement = props.smallCow ? 'col-span-2 items-end py-36 px-10' : 'col-span-7 items-center'
const contentPlacement = props.smallCow ? 'col-span-10' : 'col-span-5'
</script>