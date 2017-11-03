module.exports = function(grunt) {

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Compile Sass to CSS
    sass: {
      expanded: {
        options: {
          style: 'expanded',
        },
        src: 'example.main.scss',
        dest: 'test/example.main.css'
      },
      compressed: {
        options: {
          style: 'compressed',
        },
        src: 'example.main.scss',
        dest: 'test/example.main.min.css'
      }
    },

    // Run tasks whenever watched files change
    watch: {
      sass: {
        files: ['**/*.scss', '!node_modules/**/*.scss'],
        tasks: ['sass:expanded', 'sass:compressed'],
        options: {
          livereload: true,
        }
      }
    }

  });

  // Task definitions
  grunt.registerTask('test', ['sass:expanded', 'sass:compressed']);
  grunt.registerTask('default', ['test', 'watch']);

};