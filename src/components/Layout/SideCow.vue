<template>
    <main class="grid grid-cols-1 grid-rows-10 md:grid-rows-1 md:grid-cols-12 h-screen">
        <div :class="twMerge('cow-container col-span-7 hidden md:flex bg-blueberry-700', cowStyle.sideStyle)">
           <slot name="image">vaquinha</slot>
        </div>
        <div :class="twMerge('main-container col-span-full md:col-span-5 bg-silver-50', cowStyle.contentStyle)">
            <slot name="content">login</slot>
        </div>
    </main>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { PropType } from 'vue';

type CowStyle = {
    sideStyle: string
    contentStyle: string
}

defineProps({
    cowStyle:{
        type: Object as PropType<CowStyle>,
        default:
            {
                sideStyle: '',
                contentStyle: ''
            }
    }
})

/* const props = defineProps<{
    smallCow: boolean
}>();

const cowPlacement = props.smallCow ? 'col-span-2 items-end py-36 px-10' : 'col-span-7 items-center'
const contentPlacement = props.smallCow ? 'col-span-10' : 'col-span-5 flex justify-center items-center' */
</script>