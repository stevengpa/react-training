var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');

// rbc = React Babel Compile
gulp.task('rbc', () => {
	return browserify({
		entries: './js/src/app.jsx',
		extensions: ['.js', '.jsx'],
		debug: true
	})
	.transform('babelify', {presets: ['es2015', 'stage-3', 'react']})
	.transform('brfs')
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./js/dist'));
});

gulp.task('watch', () => {
	gulp.watch(['./js/src/**/**.js', './js/src/**/**.jsx'], ['rbc']);
});

gulp.task('default', ['watch']);
