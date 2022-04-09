module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({config: './assets/backend/tailwind.config.js'}),
        require('autoprefixer'),
    ]
}