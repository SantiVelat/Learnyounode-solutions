var http = require('http')
var port = process.argv[2]
var through2 = require('through2')

var streamTrransform = through2(function (chunk, _, next) {
  chunk = chunk.toString().toUpperCase()
  this.push(chunk)
  next()
})
var server = http.createServer()
server.on('request', function (req, res) {
  req.pipe(streamTrransform).pipe(res)
}).listen(port)
