var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');

router.post('./signup', usersCtrl.usersCtrl.signup);
router.post('login', usersCtrl.login);


module.exports = router;