const { src, dest, watch } = require ("gulp");
const sass = require("gulp-sass")(require("sass"));

function css (cb) {
    
    src('src/scss/app.scss')// Identificar el archivo de sass
    .pipe( sass() )// Compilarlo
    .pipe( dest("build/css")) // Guardarlo
    
    cb(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(cb) {
    watch('src/scss/app.scss', css)
 cb();
}

exports.css = css;
exports.dev = dev;