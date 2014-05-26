module.exports = function(grunt) {
    // Load Grunt task declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt
    grunt.initConfig({
            // grunt-contrib-connect will serve the files of the project
            // on specific port and hostname
            express: {
                all :{
                    options:{
                        port:9000,
                        hostname:"0.0.0.0",
                        bases: ['public','public/app'], // path to document root
                        livereload: true,
                     }
                 }
            },

            open: {
                   all:{
                        // gets the port from the connect configuration
                        path: 'http://localhost:<%= express.all.options.port %>'
                   }
            },

            stylus:{
                compile:{
                        options : {
                            compress: false,
                            watch: true,
                            import: [], // import files
                        },

                         files : { 'public/app/css/style.css':'public/app/styles/style.styl' },

                    }

            },

            compass: {
                dist: {
                    options:{
                        //style:'compress',
                        // compass:true
                        sassDir:'public/app/styles/',
                        cssDir:'public/app/css/',
                        watch: true
                    },

                  // files: {
                   //     'public/app/css/style.css':'public/app/styles/style.scss'
                   // }

                    /*files : [ {
                        expand:true,
                        cwd:'public/app/styles/',
                        src:['*.scss'],
                        dest:'public/app/css',
                        ext:'.css'
                    }]*/
                }
            },

            // grunt watch will monitor the project files
            watch:{
                options:{ livereload:true,},

               stylus:{
                   files: 'public/app/styles/*.styl',
                    task:['stylus']
                },

                styles:{
                    files: ['public/app/styles/*.scss', 'public/app/styles/*.styl'],
                    task:['compass','stylus']
                },

                html: {
                    files: ['index.html'] // no tasks, just live reload
                }
          }
    });

     grunt.registerTask('serve',[
        'express','compass','stylus',
        // 'open',
        'watch'
     ]);
};

