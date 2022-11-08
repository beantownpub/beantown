var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages
const kafka = require('../utils/kafka')

const PRODUCER = kafka.brokers.producer()


router.use(function (req, res, next) {
  next()
})

router.post('/event', function(req, res, next) {
  kafka.sendToStream(PRODUCER, 'clicks', 'events', req.body)
  res.sendStatus(200)
})

router.get('/', function(req, res, next) {
  const home = pages.index
  res.render("main", home.metadata)
})

router.get(/^\/index\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/')
})

router.get(/^\/about\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/about')
})

router.get(/^\/menu\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/menu')
})

router.get('/events.html', function(req, res, next) {
  res.redirect('/parties')
})

router.get('/event', function(req, res, next) {
  res.redirect('/parties')
})

router.get(/^\/parties\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/parties')
})

router.get(/^\/merch\.(.*)\/?$/i, function(req, res, next) {
  res.redirect('/merch/items')
})

router.get('/merch', function(req, res, next) {
  res.redirect('/merch/items')
})

router.get('/healthz', function(req, res, next) {
  // console.log(req.url)
  res.sendStatus(200)
})

router.get('/:section', function(req, res, next) {
  const page = pages[req.params['section']]
  if (page) {
    res.render("main", page.metadata)
  } else {
    console.log(`404 index | ${req.path}`)
    res.render("main", pages["error"]["metadata"])
  }
})

module.exports = router
