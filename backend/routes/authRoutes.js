const express = require('express')
const router = express.Router()
const { signup, signin, logout, userProfile } = require('../controllers/authController')
const { isAuthenticated } = require('../middleware/auth')


// authh routes
router.post('/signup', signup)
router.post('/signin', signin)
router.get('/logout', logout)
router.get('/me', isAuthenticated, userProfile)
module.exports = router