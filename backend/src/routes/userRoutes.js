const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/user', userController.create)
router.get('/users', userController.read)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.remove)
router.post('/login', userController.login)

module.exports = router
