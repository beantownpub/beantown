import express from 'express'
import * as axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { urls } from '../utils/appUrls.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const LOCAL_MENU_PATH = path.join(__dirname, '../../data/menus/beantown.json')

const router = express.Router()
const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
console.log(`Menu URL: ${urls.menuApi}`)
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const OPTIONS = {
  method: 'get',
  headers: {'Content-Type': 'application/json', 'Authorization': AUTH},
  url: ''
}

async function getMenu(uri, res) {
  OPTIONS.url = `${urls.menuApi}${uri}`
  try {
    const response = await axios.default(OPTIONS)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.warn(`Menu API unavailable (${error.message}), falling back to local JSON`)
    try {
      const raw = fs.readFileSync(LOCAL_MENU_PATH, 'utf8')
      const data = JSON.parse(raw)
      res.status(200).json({'status': 200, 'data': data})
    } catch (fileError) {
      console.error('Failed to load local menu fallback:', fileError)
      res.status(500).json({'status': 500, 'message': 'Menu unavailable'})
    }
  }
}

router.get('/categories', async (req, res, next) =>{
    await getMenu(`/v1/menu?location=beantown`, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
