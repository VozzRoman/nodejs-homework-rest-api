
const express = require("express");
const router = express.Router();
const ctrWrapper = require('../../middlewares/ctrWrapper');
const auth = require('../../middlewares/auth');
const {getCurrent, updateSubscrition, updateByIdSubscrition} = require('../../controllers/users/index');

router.get('/current', auth, ctrWrapper(getCurrent));
router.patch('/current/subscription', auth, ctrWrapper(updateSubscrition));//Обновление подписки только зарегистрированного пользователя (subscription) пользователя
router.patch('/:id/subscription', ctrWrapper(updateByIdSubscrition));//Обновление подписки любого пользователя по ID(subscription)

module.exports = router;