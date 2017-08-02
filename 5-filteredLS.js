var fs = require('fs')
var path = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(path, function (err, data) {
  if (err) { throw err }	else {
    data.filter(function (item) {
      item.includes(ext) ? console.log(item) : null
    })
  }
})
