'use strict';

module.exports = function() {
	$.gulp.task('concat', function() {
		return $.gulp.src(['./build/assets/css/app.css', './build/assets/css/sprite.css'])
			.pipe($.concat('styles.css'))
			.pipe($.gulp.dest('./build/assets/css/'));
	});
};