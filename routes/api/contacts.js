const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'Home work done' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'Home work done' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'Home work done' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'Home work done' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
