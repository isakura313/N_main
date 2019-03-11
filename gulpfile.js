let gulp  = require('gulp'),
  // uglify  = require('gulp-uglify'),
 cssnano  = require('gulp-cssnano'),
 concatCss = require('gulp-concat-css'),
 rename   = require('gulp-rename'),
 // del      = require('del'),
 // imagemin = require('gulp-imagemin'),
 // cache    = require('gulp-cache'),
 notify   = require('gulp-notify');




function css_lib(){
	return gulp.src('app/css/*.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(concatCss("css/style.css"))
		.pipe(gulp.dest('dist/')) // Выгружаем в папку app/css
		.pipe(notify("vse sdelal!"));
};

gulp.task('default', css_lib);

// const imagemin = require('imagemin');
// const imageminPngquant = require('imagemin-pngquant');
// const ftp = require( 'vinyl-ftp' ) //здесь добавляется ftp загрузка
// imagemin(['img/*.png'], 'build/images', {use: [imageminPngquant()]}).then(() => {
//     console.log('Images optimized');
// });

