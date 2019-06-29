const fs = require('fs')
const path = require('path')

var srcPath = path.resolve(__dirname, './src');
fs.readdir(srcPath, (err, files) => {
  files.forEach(fileName => {
    fs.readFile(path.resolve(srcPath, './' + fileName), 'utf8', (err, data) => {
      console.log('data:', data)
      fs.writeFile('test.html', data, err => {
        console.log('err:', err)
      })
    })
  })
})

var reg = /\<link\s+href=\"[^\"\>]*\"\>/
var regTest = reg.test('<link  href="/statics/ffsm/public/wap.min-v=0817.css">')
console.log('regTest:', regTest)

fs.open(path.resolve(__dirname, './test.html'), 'r', (err, fd) => {
  console.log('fd:', fd)

  fs.close(fd, err => {
    console.log('fd close error:', err)
  })
})
