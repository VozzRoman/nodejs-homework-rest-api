
const express = require("express");
const router = express.Router();
const ctrWrapper = require('../../middlewares/ctrWrapper');
const auth = require('../../middlewares/auth');

const {
	register,
	login,
	logout
} = require('../../controllers/auth');

router.post('/register', ctrWrapper(register));
router.post('/login', auth, ctrWrapper(login));
router.get('/logout', auth, ctrWrapper(logout) )

module.exports = router;