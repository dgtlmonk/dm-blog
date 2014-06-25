var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sass = require('gulp-sass'),
    lr = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge-stream');



var onError = function (err){
    console.log(err);
}


// paths
var paths = {
     scripts: [],
     images:[],

     // stylesheets
    stylus_src:['./components/stylsheets/stylus/*.styl'],
    sass_src:['./components/stylsheets/sass/*.scss'],
    styles_dest:'./public/app/css/',

    // coffee
    coffee_app_bootstrap_src:['./components/coffee/*.coffee'],
    coffee_app_scripts_src:['./components/coffee/scripts/*.coffee','./components/coffee/scripts/**/*.coffee'],
    coffee_app_bootstrap_dest:'public/app',
    coffee_app_scripts_dest:'public/app/scripts',

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

// define tasks
gulp.task('sass',function(){
    return gulp.src(paths.sass_src)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass({
            lineNumbers: true,
            style:'expanded'
        }))
        .pipe(gulp.dest(paths.styles_dest))
})

gulp.task('coffee', function (){
    var bootstrap = gulp.src(paths.coffee_app_bootstrap_src )
                    .pipe(plumber({
                       errorHandler: onError
                     }))
                    .pipe(coffee({
                        bare:true
                    }))
                    .pipe(gulp.dest(paths.coffee_app_bootstrap_dest))

    var scripts = gulp.src(paths.coffee_app_scripts_src)
                  .pipe(sourcemaps.init())
                  .pipe(plumber({
                    errorHandler: onError
                   }))
                  .pipe(coffee({
                      bare:true
                  }))
                  .pipe(sourcemaps.write({
                      addComment: false
                  }))
                  .pipe(gulp.dest(paths.coffee_app_scripts_dest))

    return merge(bootstrap, scripts);
})

gulp.task('watch', function (argument) {
    lr.listen();
    gulp.watch(paths.sass_src,['sass']);
    gulp.watch([paths.coffee_app_bootstrap_src, paths.coffee_app_scripts_src],['coffee']);
    gulp.watch([paths.sass_src, paths.html, paths.coffee_app_bootstrap_src, paths.coffee_app_scripts_src]).on('change', lr.changed);

});

gulp.task('default',['coffee','sass','watch','connect']);
