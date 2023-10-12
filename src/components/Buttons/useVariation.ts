// mouse.js
import { computed } from 'vue'
import { variations } from './constants';

// by convention, composable function names start with "use"
export function useVariation(variation: string) {
    const buttonStyle = computed(() => {
        return variations[variation].buttonStyle;
    });

    const buttonTextStyle = computed(() => {
        return variations[variation].buttonTextStyle;
    });

    const buttonIconStyle = computed(() => {
        return variations[variation].buttonIconStyle;
    });

    const tooltipStyle = computed(() => {
        return variations[variation].tooltipStyle;
    });

    return { buttonStyle, buttonTextStyle, buttonIconStyle, tooltipStyle }
}