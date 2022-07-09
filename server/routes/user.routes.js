const express = require('express');
const router = express();

const userController = require("../controllers/user.controller")

router.post('/signUp', userController.signUp)
router.post('/signIn', userController.signIn)
router.get("/userEnd",userController.userEnd)

module.exports = router;