var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var merchRouter = require('./routes/merch');

var app = express();

// var staticUrl = 'https://s3.us-east-2.amazonaws.com/static.jalgraves.com/pub/public/';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, '../dist/public'),
  dest: path.join(__dirname, '../dist/public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, '../dist/public')));
// app.use(express.static(staticUrl));

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter);
app.use(urlRoot + '/users', usersRouter);
app.use(urlRoot + 'merch', merchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // console.log(logger.req)

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
