var generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments)
  },
  copyTemplates: function() {
    this.directory('build', 'build')
    this.directory('src', 'src')
    this.copy('package.json', 'package.json')
    this.copy('.babelrc', '.babelrc')
  }
})
