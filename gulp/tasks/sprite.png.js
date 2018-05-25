'use strict';

module.exports = function() {
	$.gulp.task('sprite:png', function () {
		var spriteData = $.gulp.src('./source/images/*.{png,gif}').pipe($.spritesmith({
			imgName: 'sprite.png',
			imgPath: '../img/sprite.png',
			cssName: 'sprite.css'
		}));

		var imgStream = spriteData.img
			.pipe($.gulp.dest($.config.root + '/assets/img'));

		var cssStream = spriteData.css
			.pipe($.gulp.dest($.config.root + '/assets/css/'));

		return imgStream, cssStream;
	});
};
