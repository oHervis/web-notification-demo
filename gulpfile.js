var gulp 		= require('gulp');
var clean 		= require('gulp-clean');
var concat 		= require('gulp-concat');
var cleanCSS 	= require('gulp-clean-css');
var runSequence = require('run-sequence');
var es 			= require('event-stream');
var htmlmin 	= require('gulp-htmlmin');
var babel 		= require('gulp-babel');
var uglify 		= require('gulp-uglify');

gulp.task('clean', function () {
	return gulp.src('public/assets/')
	.pipe(clean());
});



gulp.task("babel", function () {
   gulp.src("assets/js/**/*.js")
    .pipe(concat('scripts.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("public/assets/source/js/"));
});

gulp.task('htmlmin', function () {
	 gulp.src('assets/view/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('public/'))
});

gulp.task('cssmin', function () {
	 gulp.src(['assets/css/**/*.css'])
	.pipe(cleanCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('public/assets/source/css'));
});

gulp.task('watchJS', function () {     
    return gulp.watch('assets/js/**/*.js',['babel']);
        
});
gulp.task('watchCSS', function () {     
    return gulp.watch('assets/css/**/*.css',['cssmin']);
        
});
gulp.task('watchHTML', function () {     
    return gulp.watch('assets/view/*.html',['htmlmin']);
        
});


gulp.task('default', function (cb) {
	 runSequence('clean', ['babel','cssmin','htmlmin', 'watchJS', 'watchCSS', 'watchHTML'], cb)
});