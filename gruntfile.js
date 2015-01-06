module.exports = function(grunt){

	//Load in grunt tasks
	require('load-grunt-tasks')(grunt);

	//Project grunt setup
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		sass: {
			options: {
	            outputStyle: 'compressed',
	            sourceMap: false
	        },
			compile: {
				files: {
					"dist/css/main.css": "app/sass/main.scss"
				}
			}
		},
		watch: {
				options: {
					interrupt: true
				},
				css: {
					files: 'app/sass/**/*.scss',
					tasks: ['sass']
				},
				js: {
					files: 'app/js/*.js',
					tasks: ['uglify']
				}
			},
		uglify: {
			dist: {
				files: {
					'dist/js/<%= pkg.name %>.min.js' : ['app/js/*.js']
				}
			}
		} 
	});

	//load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default tasks
	grunt.registerTask('default', ['sass:compile', 'uglify']);
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('heroku', ['default']);

	
}