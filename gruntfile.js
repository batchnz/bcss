module.exports = function(grunt) {

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Compile Sass to CSS
    sass: {
      build: {
        options: {
          style: 'expanded',
        },
        src: 'example.main.scss',
        dest: 'test/example.main.css'
      },
      options: {
        sourcemap: 'none',
      }
    },

    // Run tasks whenever watched files change
    watch: {
      sass: {
        files: ['**/*.scss','*.scss','!node_modules/**/*.scss'],
        tasks: ['sass:build']
      }
    }

  });

  // Task definitions
  grunt.registerTask('build', ['sass:build']);
  grunt.registerTask('default', ['build', 'watch']);

};