const browserSync = require('browser-sync')

const openBrowser = () => {
  const browser = browserSync.create()
  browser.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })
  return browser
}

module.exports = openBrowser
