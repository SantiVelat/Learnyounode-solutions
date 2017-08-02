var fs = require('fs')

function findFiles (directoryName, extension, fnCallback) {
  fs.readdir(directoryName, function (err, list) {
    if (err) return fnCallback(err)

    var filteredFiles = list.filter(function (file) {
	  	return file.includes('.' + extension)
    })
    return fnCallback(null, filteredFiles)
  })
}

module.exports = findFiles
