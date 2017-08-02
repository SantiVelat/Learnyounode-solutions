var findFiles = require('./6-makeItModular-module.js')

var directoryName = process.argv[2]
var extension = process.argv[3]

findFiles(directoryName, extension, function (err, data) {
  if (err) throw err
  console.log(data.join('\n'))
})
