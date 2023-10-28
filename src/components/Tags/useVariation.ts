import { computed } from 'vue'
import { variations, colors } from './constants';

export function useVariation(color: string, variation: string) {
    const iconColor = computed(() => {
        return colors[color];
    });
    const iconVariation = computed(() => {
        return variations[variation];
    });

    return { iconColor, iconVariation }
}