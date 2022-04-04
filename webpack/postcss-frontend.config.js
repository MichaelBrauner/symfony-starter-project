module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({config: './webpack/tailwind-frontend.config.js'}),
        require('autoprefixer'),
    ]
}