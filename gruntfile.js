module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {"static/css/style.css": "static/less/style.less"}
            }
        },
        watch: {
            files: ['**/*.less', '*.less'],
            tasks: ['less'],
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};