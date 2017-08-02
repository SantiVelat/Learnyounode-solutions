var http = require('http')
var through2 = require('through2')
var url = process.argv[2]

var streamTransform = through2(function (chunk, _, next) {
  chunk = chunk + '\n'
  this.push(chunk)
  next()
})

http.get(url, function (readableResponse) {
  readableResponse.setEncoding('utf-8')
  readableResponse.on('error', function (error) {
    console.log(error)
  })
  readableResponse.pipe(streamTransform).pipe(process.stdout)
})
