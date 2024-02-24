const ejs = require('ejs')
const fs = require('node:fs')
const marked = require('marked')

const readme = fs.readFileSync('README.md')

const openBrowser = require('./browser.js')

ejs.renderFile('./index.ejs', {
  content: marked.parse(readme.toString()),
  title: 'markdow to html'
}, (err, data) => {
  if (err) console.log(err)
  let writeSteam = fs.createWriteStream('index.html')
  writeSteam.write(data)
  writeSteam.close()
  writeSteam.on('finish', () => {
    openBrowser()
  })
})
