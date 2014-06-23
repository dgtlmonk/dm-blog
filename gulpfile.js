var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sass = require('gulp-sass'),
    lr = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect');


// paths
var paths = {
     scripts: [],
     images:[],

    stylus_src:['./components/stylsheets/stylus/*.styl'],
    styles_dest:'./public/app/styles/',

    sass_src:['./components/stylsheets/sass/*.scss'],


    coffee:['./components/coffee/*.coffee'],
    coffee_dest:['./public/app/'],

    html:['./public/*.html'],
    js:['./app/scripts/*.js'],
    build_js:['./app/build/scripts/']
}

gulp.task('connect', function () {
    connect.server({
        root: ['public'],
        port: 9002,
        browser: 'chrome',
        livereload: true // livereload
    });
})

// define task
gulp.task('sass',function(){
    return gulp.src(paths.sass_src)
        .pipe(sass({
            lineNumbers: true,
            style:'expanded'
        }))
        .pipe(gulp.dest(paths.styles_dest))

     //   .pipe(connect.reload());
})



gulp.task('scripts', function () {
    return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('./app/build/scripts'))
   // .pipe(connect.reload());
});

gulp.task('html', function(){
    gulp.src(paths.html)
   // .pipe(connect.reload());
});

gulp.task('watch', function (argument) {
    lr.listen();
    gulp.watch(paths.html,['html']);
    gulp.watch(paths.sass_src,['sass']);
    gulp.watch([paths.sass_src, paths.html]).on('change', lr.changed);

});

gulp.task('default',['sass','watch','connect']);
