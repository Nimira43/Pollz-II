require('dotenv').config()

const express = require('express')

const router = express.Router()
const Pusher = require('pusher')
const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true
})


router.get('/', (req, res) => {
  res.send('Voting')
})

router.post('/', (req, res) => {

})

module.exports = router