const router = require('express').Router()

// import routes
const iecho = require('./iecho')

router.use('/', iecho)

module.exports = router
