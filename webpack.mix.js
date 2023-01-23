let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js');
mix.sass('src/scss/style.scss', 'dist/css');

mix.webpackConfig({
  stats: {
      children: true,
  },
});