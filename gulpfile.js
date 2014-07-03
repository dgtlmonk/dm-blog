var gulp = require('gulp'),
    sass = require('gulp-sass'),
    lr = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    nib = require('nib'),
    uglify = require('ng-annotate-uglify-js-brunch'),
    ngAnnotate = require('gulp-ng-annotate'),
    merge = require('merge-stream');



var onError = function (err){
    console.log('An Error occured: ' + err);
}


// paths
var paths = {
     scripts: [],
     images:[],

     // stylesheets
    stylus_src:['./components/stylsheets/stylus/layout2.styl'],
    sass_src:['./components/stylsheets/sass/*.scss'],
    styles_dest:'./public/app/css/',

    // coffee
    coffee_app_bootstrap_src:['./components/coffee/*.coffee'],
    coffee_app_scripts_src:['./components/coffee/scripts/*.coffee','./components/coffee/scripts/**/*.coffee'],
    coffee_app_bootstrap_dest:'public/app',
    coffee_app_scripts_dest:'public/app/scripts',

    html:['./public/*.html','./public/app/partials/**/*.html'],
    js:['./app/scripts/*.js','./app/scripts/**/*.js'],
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

gulp.task('compass',function(){
    return gulp.src(paths.sass_src)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(compass({
            sass: './components/stylsheets/sass',
            css:'./public/app/css',
            require :['susy','breakpoint']
        }))
        // .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles_dest))
})


gulp.task('stylus', function (){
    return gulp.src(paths.stylus_src)
        .pipe(stylus({
           use:[nib()],
           cache: false
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
                    .pipe(ngAnnotate())
                    // .pipe(uglify())
                    .pipe(gulp.dest(paths.coffee_app_bootstrap_dest))

    var scripts = gulp.src(paths.coffee_app_scripts_src)
                  .pipe(sourcemaps.init())
                  .pipe(plumber({
                    errorHandler: onError
                   }))
                  .pipe(coffee({
                      bare:true
                  }))
                  .pipe(ngAnnotate())
                  //.pipe(uglify())
                  .pipe(sourcemaps.write({
                      addComment: false
                  }))
                  .pipe(gulp.dest(paths.coffee_app_scripts_dest))

    return merge(bootstrap, scripts);
})

gulp.task('watch', function (argument) {
    lr.listen();
    // gulp.watch(paths.sass_src,['sass']);
    gulp.watch(paths.sass_src,['compass']);
   // gulp.watch('./components/stylsheets/stylus/*',['stylus']);
    gulp.watch([paths.coffee_app_bootstrap_src, paths.coffee_app_scripts_src],['coffee']);
    gulp.watch(['./components/stylsheets/stylus/*' ,paths.sass_src, paths.html, paths.coffee_app_bootstrap_src, paths.coffee_app_scripts_src]).on('change', lr.changed);

})

gulp.task('default',['stylus','coffee','compass','watch','connect']);
