'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
	path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
  del: require('del'),
	spritesmith: require('gulp.spritesmith'),
	concat: require('gulp-concat'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.series(
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:svg'
  ),
	$.gulp.series(
		'sass',
		'sprite:png',
		'concat',
		'clean:css'
	),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
