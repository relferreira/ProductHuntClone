var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    browserSync = require('browser-sync'),
    del = require('del'),
    wiredep = require('wiredep').stream,
    karma = require('gulp-karma');

var $ = gulpLoadPlugins();
var reload = browserSync.reload;

gulp.task('styles', function() {
    return gulp.src('app/styles/*.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass.sync({
          outputStyle: 'expanded',
          precision: 10,
          includePaths: ['.']
      }).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: ['last 1 version']}))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest('.tmp/styles'));
      //.pipe(reload({stream: true}));
});



function lint(files, options) {
    return function() {
        return gulp.src(files)
          .pipe(reload({stream: true, once: true}))
          .pipe($.eslint(options))
          .pipe($.eslint.format())
          .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
    };
}
const testLintOptions = {
    env: {
        mocha: true
    }
};

const listOptions = {
    globals : {
        'angular' : true
    },
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }]
};

gulp.task('lint', lint('app/**/*.js', listOptions));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['styles'], function() {
    const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

    return gulp.src('app/*.html')
      .pipe(assets)
      .pipe($.if('*.js', $.uglify()))
      .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
      .pipe(gulp.dest('dist'));
});

gulp.task('html-dev', ['styles'], function() {
    const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

    return gulp.src('app/*.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
      .pipe($.if($.if.isFile, $.cache($.imagemin({
          progressive: true,
          interlaced: true,
          // don't remove IDs from SVGs, they are often used
          // as hooks for embedding and styling
          svgoPlugins: [{cleanupIDs: false}]
      }))
      .on('error', function (err) {
          console.log(err);
          this.end();
      })))
      .pipe(gulp.dest('dist/images'));
});

gulp.task('res', function() {
    return gulp.src('app/assets/res/**/*')
      .pipe(gulp.dest('dist/res'));
});

gulp.task('fonts', function() {
    return gulp.src(require('main-bower-files')({
        filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
      .pipe(gulp.dest('.tmp/fonts'))
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
    return gulp.src([
      'app/*.*',
      '!app/*.html',
      '!app/*.js'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('html2js', function() {
    return gulp.src(['app/components/**/*.html', 'app/shared/**/*.html'])
        .pipe($.html2js({
            outputModuleName: 'template',
            useStrict: true,
            base: 'app/',
            quoteChar: '\''
        }))
        .pipe($.concat('template.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('plugins', function() {
    return gulp.src('plugins/**/*')
      .pipe(gulp.dest('dist/plugins'));
});


gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['html2js', 'styles', 'fonts'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch([
      'app/**/*.html',
      'app/components/**/*.js',
      'app/shared/**/*.js',
      'app/styles/**/*.scss',
      'app/assets/images/**/*',
      '.tmp/fonts/**/*'
    ], ['html2js', 'styles', 'fonts']).on('change', reload);

});

gulp.task('serve:dist', function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['dist']
        }
    });
});

gulp.task('serve:test', function() {
    browserSync({
        notify: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: 'test',
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch('test/spec/**/*.js').on('change', reload);
    gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', function() {
    gulp.src('app/styles/*.scss')
      .pipe(wiredep({
          ignorePath: /^(\.\.\/)+/
      }))
      .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
      .pipe(wiredep({
          ignorePath: /^(\.\.\/)*\.\./
      }))
      .pipe(gulp.dest('app'));
});

gulp.task('test', function() {
    return gulp.src('./foobar')
      .pipe(karma({
          configFile: 'karma.conf.js',
          action: 'run'
      }))
      .on('error', function(err) {
          console.log(err);
          this.emit('end');
      });
});

gulp.task('build', [ 'html2js' , 'html', 'images', 'fonts', 'extras'], function() {
    return gulp.src('dist/**/*').pipe($.size({ title: 'build', gzip: true }));
});

gulp.task('build-dev', [ 'html2js' , 'html-dev', 'images', 'fonts', 'extras'], function() {
    return gulp.src('dist/**/*').pipe($.size({ title: 'build', gzip: true }));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});