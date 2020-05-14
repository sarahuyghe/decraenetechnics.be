(function () {
  'use strict';

  module.exports = function (grunt) {
    // load all Grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      compass: {
        dist: {
          options: {
            config: 'config.rb',
            force: true
          }
        }
      },

      // javascript linting
      jshint: {
        options: {
          jshintrc: '.jshintrc',
          force: true
        },
        all: [
          'Gruntfile.js',
          'resources/var/build/*.js'
        ]
      },

      concat: {
        app: {
          // options: {
          //   separator: '\n',
          //   banner: '(function($) {\n',
          //   // footer: '\n})(jQuery);'
          // },
          src: [
            'resources/js/app.js'
          ],
          dest: 'resources/var/build/app.js'
        },
        /*cookies: {
            options: {
                separator: '\n',
                banner: '(function($) {\n',
                footer: '\n})(jQuery);'
            },
            src: [
                'resources/js/cookies.js'
            ],
            dest: 'resources/var/build/cookies.js'
        },*/
      },

      // uglify to concat, minify, and make source maps
      uglify: {
        dist: {
          files: {
            'assets/js/app.min.js': ['resources/var/build/app.js'],
            //'wp-content/themes/svk/assets/js/cookies.min.js': [ 'resources/var/build/cookies.js' ],
          }
        }
      },

      // image optimization => run MANUALLY via grunt imagemin
      imagemin: {
        dist: {
          options: {
            optimizationLevel: 7,
            progressive: true
          },
          files: [{
            expand: true,
            cwd: 'assets/images/',
            src: '**/*.{png,jpg,gif}',
            dest: 'assets/images/'
          }]
        }
      },

      // watch for changes and trigger compass, jshint, uglify and livereload
      watch: {
        compass: {
          files: ['resources/sass/**/*.{scss,sass}'],
          tasks: ['compass']
        },
        js: {
          files: ['resources/js/**/*.js'],
          tasks: ['concat', 'jshint', 'uglify']
        },
        livereload: {
          files: [
            '*.html',
            'wp-content/themes/decraene/*.php',
            'wp-content/themes/decraene/**/*.php',
            'wp-content/themes/decraene/*.css',
            'wp-content/themes/decraene/**/*.{png,jpg,jpeg,gif,webp,svg}',
            'wp-content/themes/decraene/assets/js/*.min.js',

            'assets/js/*.min.js',
            'frontend/*.css',
            'frontend/*.html'
          ],
          options: {
            livereload: true
          }
        }
      }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile', ['compass', 'concat', 'jshint', 'uglify']);
  };
}());
