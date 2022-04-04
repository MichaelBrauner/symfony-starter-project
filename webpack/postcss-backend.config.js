module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({config: './webpack/tailwind-backend.config.js'}),
        require('autoprefixer'),
    ]
}