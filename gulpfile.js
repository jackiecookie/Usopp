
var gulp=require('gulp');

var sass=require('gulp-sass');

require('gulp-watch');

var path={
    scss:'./sass/**/*.sass'
}

gulp.task('sass',function () {
    return gulp.src(path.scss).
        pipe(sass().on('error',sass.logError)).
        pipe(gulp.dest('../statics/css'))
})

gulp.task('watch',function(){
    gulp.watch(path.scss,['sass']);
})


gulp.task('default',['watch']);