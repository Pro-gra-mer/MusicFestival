const { src, dest, watch, parallel } = require ("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

// Para comprimir css
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Para comprimir js
const terser = require('gulp-terser-js');


function css (cb) {
    
    src('src/scss/**/*.scss')// Identificar el archivo de sass
    .pipe(sourcemaps.init())
    .pipe( plumber())// Evita detención de la ejecución ante algún error
    .pipe( sass() )// Compilarlo
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe( dest("build/css")) // Guardarlo
    
    cb(); // Callback que avisa a gulp cuando llegamos al final
}

function javascript(cb) {
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));

    cb();
}

function dev(cb) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)
 cb();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel (javascript, dev);