module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		jshint: {
			src: ['Gruntfile.js', 'src/*.js', 'src/config.js', 'tests/*.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				globals: {
					require: true,
					define: true,
					describe: true,
					expect: true,
					it: true,
					module: true,
					console: true
				}
			}
		},
		simplemocha: {
			options: {
				globals: ['expect'],
				timeout: 3000,
				ignoreLeaks: false,
				ui: 'bdd',
				reporter: 'tap'
			},
			all: {
				src: ['test/*.js']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-simple-mocha');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'simplemocha']);
	grunt.registerTask('build', ['simplemocha', 'jshint', 'uglify']);
};