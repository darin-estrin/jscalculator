module.exports = function(grunt) {
  
  // configure grunt
  grunt.initConfig({
    // read package.json
    pkg: grunt.file.readJSON('package.json'),

    // set grunt to watch mode
    watch: {
      files: ['*.css', '*.js'],
      tasks: ['postcss', 'uglify']
    },

    // auto prefixes css and minifies css
    postcss: {
      options: {
        processors: [
          require('autoprefixer'),
          require('cssnano')
        ]
      },
      dist: {
        src: 'main.css',
        dest: 'main.min.css'
      }
    },

    uglify: {
      my_target: {
        files: {
          'main.min.js': ['main.js']
        }
      }
    }

  });

  // load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  // register tasks
  grunt.registerTask('default', ['postcss', 'uglify']);
};