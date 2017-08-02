var fs = require('fs')
var file = process.argv[2]

var text = fs.readFileSync(file, 'utf-8')
var result = text.split('\n').length - 1
console.log(result)
