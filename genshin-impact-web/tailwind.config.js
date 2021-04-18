module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.{vue,js}'] },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            tableLayout: ['hover', 'focus'],
        },
    },
    plugins: [],
}