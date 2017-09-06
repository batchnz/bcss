module.exports = function(grunt) {

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Compile Sass to CSS
    sass: {
      test: {
        options: {
          style: 'expanded',
        },
        src: 'example.main.scss',
        dest: 'test/example.main.css'
      }
    },

    // Run tasks whenever watched files change
    watch: {
      sass: {
        files: ['**/*.scss','!node_modules/**/*.scss'],
        tasks: ['sass:test']
      }
    }

  });

  // Task definitions
  grunt.registerTask('test', ['sass:test']);
  grunt.registerTask('default', ['test', 'watch']);

};