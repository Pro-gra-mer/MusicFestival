const { src, dest, watch } = require ("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css (cb) {
    
    src('src/scss/**/*.scss')// Identificar el archivo de sass
    .pipe( plumber())// Evita detención de la ejecución ante algún error
    .pipe( sass() )// Compilarlo
    .pipe( dest("build/css")) // Guardarlo
    
    cb(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(cb) {
    watch('src/scss/**/*.scss', css)
 cb();
}

exports.css = css;
exports.dev = dev;