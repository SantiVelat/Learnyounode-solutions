var http = require('http')
var async = require('async') // Important
var concat = require('concat-stream')
var urls = process.argv.slice(2)
var urlCallbacks = urls.map(function (url) {
  return function (callback) {
    http.get(url, function (readableResponse) {
      function handleFinalContent (totalContent) {
			        callback(null, totalContent)
			 }
      readableResponse.setEncoding('utf-8')
      readableResponse.pipe(concat(handleFinalContent))
    })
  }
})

async.series(urlCallbacks, function (err, results) {
  if (err) throw err
  results.forEach(function (content) {
    console.log(content)
  })
})
