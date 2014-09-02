var gulp = require('gulp');
var typescript = require('gulp-typescript');
var del = require('del');
gulp.task('clean', function(){
   del(['public'], function(err){
       console.log("Files Deleted");
   }); 
});
gulp.task('scripts', ['clean'], function(){
        return gulp.src('server.ts')
        .pipe(gulp.dest('public'));
});
gulp.task('watch', function(){
    gulp.watch('/', ['scripts']);
});
gulp.task('default', ['scripts']);