//Chamando os plugins.
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//Funções.

function comprimeIMG() {
    return gulp.src('./source/imagens/*').pipe(imagemin()).pipe(gulp.dest('./build/imagens'));
    //Função que comprime imagens, ganhando um pouco de performance durante a execução do site.
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'));
    //Função que comprime específicamente arquivos em .js, ganhando um pouco de performance durante a execução do site. 
}

function compilaSASS() {
    return gulp.src('./source/style/*.scss').pipe(sass({outputStyle: 'compressed'})).pipe(gulp.dest('./build/style'));
    //Função que compila o conteúdo do "main.scss" e manda para a pasta build de forma comprimida.
}

//Exportação das funções.
exports.default = function(){
    gulp.watch('./source/imagens/*', {ignoreInitial: false}, gulp.series(comprimeIMG));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJS));
    gulp.watch('./source/style/*', {ignoreInitial: false}, gulp.series(compilaSASS));

}