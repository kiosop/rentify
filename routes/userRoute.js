const express = require('express');
const userCtrl = require('../controller/userController');
const router = express.Router();

router.get('/login',userCtrl.getLogin);
router.post('/login',userCtrl.postLogin);
router.get('/logout',userCtrl.getLogout);

router.get('/register',userCtrl.getRegister);
router.post('/register',userCtrl.postRegister);

module.exports = router;