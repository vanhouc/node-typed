var gulp = require('gulp');
var ts = require('gulp-type');
var tslint = require('gulp-tslint');

gulp.task('tslint', function(){
      gulp.src('*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});
gulp.task('scripts', ['tslint'], function(){
    var tsResult = gulp.src('scripts/*.ts')
                       .pipe(ts({
                           declarationFiles: false,
                           noExternalResolve: false,
                           module: 'commonjs'
                       }));
    return tsResult.js.pipe(gulp.dest('release/js'));
});
gulp.task('server', ['tslint'], function(){
    var tsResult = gulp.src('server.ts')
                       .pipe(ts({
                           declarationFiles: false,
                           noExternalResolve: false,
                           module: 'commonjs'
                       }));
    return tsResult.js.pipe(gulp.dest('release'));
});
gulp.task('views', function(){
   return gulp.src('views/*.jade')
   .pipe(gulp.dest('release/content'));
});
gulp.task('css', function(){
   return gulp.src('css/*.css')
   .pipe(gulp.dest('release/content'));
});
gulp.task('watch', function(){
    gulp.watch('server.ts', ['server']);
    gulp.watch('scripts/*.ts', ['scripts']);
    gulp.watch('views/*.jade', ['views']);
    gulp.watch('css/*.css', ['css']);
});
gulp.task('default', ['server','scripts','views','css','watch']);