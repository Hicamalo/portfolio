'use strict';

module.exports = function() {
	$.gulp.task('clean:css', function() {
		return $.del(['./build/assets/css/app.css', './build/assets/css/sprite.css', './build.', './build..']).then(paths => {
			console.log('Deleted files and folders:\n', paths.join('\n'));
		});
	});
};