import express from 'express'
// import * as kafka from '../utils/kafka.js'
import { config } from '../utils/main.js'

const router = express.Router()
const pages = config.pages
//const producer = kafka.brokers.producer()

router.use(function (req, res, next) {
  next()
})

// router.post('/event', function(req, res, next) {
//   kafka.sendToStream(producer, 'clicks', 'events', req.body)
//   res.sendStatus(200)
// })

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
router.get(/^\/Private(.*)\/?$/i, function(req, res, next) {
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

export default router
