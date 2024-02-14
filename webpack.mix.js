// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'public/js')
    .sass('public/sass/style.scss','public/sass');
