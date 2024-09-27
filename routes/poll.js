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
  pusher.trigger('pollz-2', 'election polls', {
    points: 1,
    os: req.body.os
  })
  return res.json({success: true, message: 'Thanks for voting'})
})

module.exports = router