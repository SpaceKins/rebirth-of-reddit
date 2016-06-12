var gulp =require('gulp');
var sass =require('gulp-sass');


gulp.task('styles',function(){
  gulp.src('scss/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'));
});


gulp.task('watch',function(){
  gulp.watch(['js/display.js','reddit.js'],function(){
    console.log('display.js has changed.');
  })
});


gulp.task('default',function(){
  console.log('hello again');
});

