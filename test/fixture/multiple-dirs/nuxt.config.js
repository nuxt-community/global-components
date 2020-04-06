module.exports = {
  rootDir: __dirname,
  modules: [
    { handler: require('../../../') }
  ],
  globalComponents: {
    dir: ['libs', 'external']
  }
}
