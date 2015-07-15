// Gruntfile.js

/* 

jarraibidea:

- itzuli beharreko esaldiak html txantiloietan txertatu, "translate" direktibarekin seinalatuz
- terminalean grunt exekutatu, aplikazioaren erroan
- eratutako pot fitxategiak erabilita, po fitxategiak sortu, poedit edo antzekoren bat erabilita
- grunt berriro exekutatu, translations.js fitxategia eratzeko

erreferentziak:

- http://angular-gettext.rocketeer.be/

*/


/*module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ['public/*.html', 'public/partials/*.html']
        }
      },
    },
    nggettext_compile: {
      all: {
        files: {
          'public/js/translations.js': ['po/*.po']
        }
      },
    },
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-angular-gettext');

  // Default task(s).
  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);

};*/

module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
  nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['**/*.html']
      }
    },
  },
  nggettext_compile: {
    all: {
      files: {
        'translations.js': ['po/*.po']
      }
    },
  },
})
 
  grunt.loadNpmTasks('grunt-angular-gettext');
 
};