export default {
    root: ({ context }) => ({
        class: [
            // Font
            'font-sans leading-6',
            'sm:text-sm',

            // Spacing
            'm-0',
            'py-1.5 px-3',

            // Shape
            'rounded-md',
            'appearance-none',

            // Colors
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0',
            'shadow-sm',

            // States
            {
                'outline-none focus:ring-blueberry-500 dark:focus:ring-blueberry-400': !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
