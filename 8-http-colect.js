var http = require('http')
var concat = require('concat-stream')
var urlToGet = process.argv[2]

http.get(urlToGet, function (readableResponse) {
  readableResponse.setEncoding('utf8')

  readableResponse
    .pipe(concat(function (totalContent) {
      console.log(totalContent.length)
      console.log(totalContent)
    }))
})

// var http = require('http')
// var through2 = require('through2')
// var url = process.argv[2]

// http.get(url, function (readableResponse) {
//   var totalContent = ''

//   readableResponse.setEncoding('utf-8')
//   readableResponse.on('error', function (error) {
//     console.log(error)
//   })
//   readableResponse.on('data', function (chunkData) {
//     totalContent += chunkData
//   })
//   readableResponse.on('end', function () {
//   	console.log(totalContent.length)
//   	console.log(totalContent)
//   })
// })
