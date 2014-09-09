var gulp = require('gulp');
var ts = require('gulp-type');
var tslint = require('gulp-tslint');

gulp.task('tslint', function(){
      gulp.src('*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});
gulp.task('scripts', function(){
    var tsResult = gulp.src('*.ts')
                       .pipe(ts({
                           declarationFiles: true,
                           noExternalResolve: false,
                           module: 'commonjs'
                       }));
    tsResult.dts.pipe(gulp.dest('release/definitions'));
    return tsResult.js.pipe(gulp.dest('release/js'));
});
gulp.task('watch', function(){
    gulp.watch('*.ts', ['scripts']);
});
gulp.task('default', ['tslint','scripts']);