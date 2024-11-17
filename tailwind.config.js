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
            },
            textColor: {
                primary: '#E7E5E4',
                primary_dark: '#181A1B',
            },
        },
    },
    darkMode: 'media',
    plugins: [
        ({ addUtilities, e }) => {
            const maxSizeUtility = {
                [`.${e(`max-size-3/4`)}`]: {
                    'max-width': '3/4',
                    'max-height': '3/4',
                },
                ['.max-size-full']: {
                    'max-width': '100%',
                    'max-height': '100%',
                }
            };
            addUtilities(maxSizeUtility);
        },
    ],
};
