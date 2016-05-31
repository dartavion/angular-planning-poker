var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static('./dist/'))
app.use('/*', express.static('./dist/index.html'));
app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + __dirname + app.get('port'))
})