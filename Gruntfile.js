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


            // grunt watch will monitor the project files
            watch:{
                all: {
                    files :['index.html'],
                    options: {
                        livereload:true
                    }
                }
        }
    });

     grunt.registerTask('serve',[
        'express',
        // 'open',
        'watch'
     ]);
};

