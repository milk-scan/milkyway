<template>
    <div class="grid grid-rows-10" style="height: calc(100vh - 64px)">
        <div :class="['row-span-4 justify-start items-start gap-2.5 inline-flex', upperSectionColor]">
            <slot name="upper-section"></slot>
        </div>
        <div
            :class="['row-span-6 px-40 pt-2.5 pb-5 flex-col justify-start items-center gap-2.5 inline-flex', lowerSectionColor]">
            <slot name="lower-section"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ColorPallete } from './constants';

const props = defineProps({
    colors: {
        default: () => {
            return {
                primary: 'bg-blueberry-700',
                secondary: 'bg-silver-200'
            } as ColorPallete
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