var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
app.set('port', (process.env.PORT || 7002));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-partial-templates')(app));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('hogan-express-strict'));

app.get('/', function(req,res, next) {
  res.render('index')
})

app.post('/', function(req,res, next) {
  if (req.body.password = 'knockknock') {
    res.render('video')
  }
  else {
    res.render('index', {errorMessage: 'Not this time...'})
  }
  
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});