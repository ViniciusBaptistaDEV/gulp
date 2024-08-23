const oficialGulp = require('gulp');
const oficialSass = require('gulp-sass')(require('sass'));
const oficialUglify = require('gulp-uglify');
const oficialImagemin = require('gulp-imagemin');

function comprimeImagens(){
    return oficialGulp.src('./source/images/*')
        .pipe(oficialImagemin())
        .pipe(oficialGulp.dest('./build/images'));
}


function comprimeJavaScript() {
    return oficialGulp.src('./source/scripts/*.js')
        .pipe(oficialUglify())
        .pipe(oficialGulp.dest('./build/scripts'))
}


function compilaSass() {
    return oficialGulp.src('./source/styles/main.scss')
        .pipe(oficialSass({
            outputStyle: 'compressed'
        }))
        .pipe(oficialGulp.dest('./build/styles'));

}


exports.default = function() {
    oficialGulp.watch('./source/images/*', { ignoreInitial: false }, oficialGulp.series(comprimeImagens));
    oficialGulp.watch('./source/scripts/*.js', { ignoreInitial: false }, oficialGulp.series(comprimeJavaScript));
    oficialGulp.watch('./source/styles/*.scss', { ignoreInitial: false }, oficialGulp.series(compilaSass));
}