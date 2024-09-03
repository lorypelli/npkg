/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                primary: '#E7E5E4',
                primary_dark: '#181A1B',
            },
            fill: {
                primary: '#E7E5E4',
                primary_dark: '#181A1B',
            },
            maxWidth: {
                '3/4': '75%',
            },
            maxHeight: {
                '3/4': '75%',
                container: '80vh',
            },
            textColor: {
                primary: '#E7E5E4',
                primary_dark: '#181A1B',
            },
        },
    },
    darkMode: 'media',
    plugins: [
        ({ addUtilities, theme, e }) => {
            const key = '3/4';
            const maxSize = theme(`maxWidth.${key}`);
            const maxSizeUtility = {
                [`.${e(`max-size-${key}`)}`]: {
                    'max-width': maxSize,
                    'max-height': maxSize,
                },
            };
            addUtilities(maxSizeUtility);
        },
    ],
};
