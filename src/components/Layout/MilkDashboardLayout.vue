<template>
    <div class="main-section grow flex flex-col">
        <div name="content-section" class="grow flex flex-col">
            <div class="upper-container px-3 grid grid-flow-dense grid-cols-12 sm:h-auto md:h-[20vh]"    >
                <slot name="upper-section"></slot>
            </div>
            <div class="lower-container grow p-3 grid grid-flow-dense grid-rows-7 grid-cols-12">
                <slot name="lower-section"></slot>  
            </div>
        </div>
        <div name="bg-filler" :class="['absolute w-full -z-10', lowerSectionColor]" style="height: calc(100vh - 64px)">
            <div name="bg-filler-top" :class="['w-full', upperSectionColor]" style="height: 30vh"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    colors: {
        default: () => {
            return {
                primary: 'bg-blueberry-700',
                secondary: 'bg-truffle-100'
            }
        }
    },
    inverted: {
        type: Boolean,
        default: false
    }
})

const upperSectionColor = computed(() => {
    return props.inverted ? props.colors.secondary : props.colors.primary;
});

const lowerSectionColor = computed(() => {
    return props.inverted ? props.colors.primary : props.colors.secondary;
});

</script>