import express from 'express'
import * as squareConnect from 'square-connect'

import { cartRequest } from '../utils/axiosRequests.js'
import { config } from '../utils/main.js'
import { urls } from '../utils/appUrls.js'
import * as squareUtils from '../utils/square.js'
//import * as  kafka from '../utils/kafka.js'

const pages = config.pages
const router = express.Router()

//const producer = kafka.brokers.producer()

// router.post('/event', function(req, res, next) {
//   kafka.sendToStream(producer, 'clicks', 'events', req.body)
//   res.sendStatus(200)
// })

router.get('/items', function(req, res, next) {
  //kafka.sendToStream(producer, 'requests', 'reqs', req.headers)
  const merch = pages['merch']
  res.render("main", merch.metadata)
})

router.get('/merch', function(req, res, next) {
  const merch = pages['merch']
  res.render(merch.template, merch.metadata);
})

const defaultClient = squareConnect.ApiClient.instance
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = squareUtils.accessToken
defaultClient.basePath = squareUtils.url

router.post('/process-payment', async (req, res) => {
  // Charge customer's card via Square API
  console.log('POST process-payment')
  const paymentsApi = new squareConnect.PaymentsApi()
  const requestBody = squareUtils.squareRequestBody(req.body)
  try {
    const response = await paymentsApi.createPayment(requestBody);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    console.error('ERROR /process-payment')
    console.error(requestBody)
    // let msg = JSON.parse(error.response.text)
    // let body = {
    //   channel: "#test-notifications",
    //   message: msg
    // }
    // let contactUrl = "http://contact-api:5012/v1/contact/slack"
    // let options = {method: "POST", credentials: "include", body: JSON.stringify(body), url: contactUrl}
    // console.log(options)
    // const notify = await request.slackRequest(options)
    // console.log(notify)
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

function sendRequest(options, cookie, res) {
  try {
    cartRequest(options, cookie, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.post('/process-order', function (req, res, next) {
  console.log("POST /process-order")
  console.log(req.body["order"])
  const apiUrl = `${urls.merchApi}/v1/merch/orders?location=beantown`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.get('/cart', function (req, res, next) {
  if (!req.sessionID) {
    req.session.regenerate(function(err) {
      console.log(`Generating session ${err}`)
    })
  }
  const apiUrl = `${urls.merchApi}/v1/merch/cart`
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.sessionID, res)
})

router.post('/cart', function (req, res, next) {
  // console.log(req.cookie)
  const apiUrl = `${urls.merchApi}/v1/merch/cart`
  // console.log(`Post Cart Session ID: ${req.sessionID}`)
  if (!req.sessionID) {
    // console.log('CART POST Generating new session')
    req.session.regenerate(function(err) {
      console.log(`POST /cart ${err}`)
    })
  }
  // console.log(`Post Cart Session ID: ${req.sessionID}`)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.sessionID, res)
})

router.delete('/cart', function (req, res, next) {
  const apiUrl = `${urls.merchApi}/v1/merch/cart`
  // console.log(`Cart | DELETE | URL | ${apiUrl}`)
  const options = {
    url: apiUrl,
    method: 'delete',
    data: req.body
  }
  sendRequest(options, req.sessionID, res)
})

router.delete('/cart/empty', function (req, res, next) {
  const cartId = req.body['id']
  const apiUrl = `${urls.merchApi}/v2/cart/empty?cart_id=${cartId}`
  // console.log(`Cart | DELETE | ID: ${cartId}`)
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  sendRequest(options, req.sessionID, res)
})

router.get('/merchandise', function (req, res, next) {
  const apiUrl = `${urls.merchApi}/v2/merch?location=beantown`
  console.log('Merchandise | ' + apiUrl)
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.sessionID, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
