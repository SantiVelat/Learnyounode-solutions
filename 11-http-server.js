var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var path = process.argv[3]

var server = http.createServer()

server.on('request', function (req, res) {
  fs.createReadStream(path).pipe(res)
}).listen(port)
