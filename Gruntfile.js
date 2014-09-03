module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'sass/main.css': 'sass/main.scss'
        },
        options: {
          style: 'compressed'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },

      dist: {
        files: ['public/**/*'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'public/',
          livereload: true,
          open: 'http://localhost:9001'
        }
      }
    },

    autoprefixer: {
      main: {
        'public/css/main.css': 'sass/main.css'
      },
      options: {}
    },

    'gh-pages': {
      src: ['**'],
      options: {
        base: 'public/',
        message: 'Refer to master branch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['sass', 'connect', 'watch']);
  grunt.registerTask('deploy', ['gh-pages']);
};
