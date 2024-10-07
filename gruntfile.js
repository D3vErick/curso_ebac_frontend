const { options } = require("less");

module.exports = function(grunt) { //Configuração do Grunt.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {//Parte de desenvolvimento.
                files: {
                    'dev/style/main.css': 'src/styles/main.less'
                    //Destino.            //Origem.
                }
            },
            production: { //Parte de serviço.
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less:{
                files: ['src/styles/**/*.less'], 
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
}