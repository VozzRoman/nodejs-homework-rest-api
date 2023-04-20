
const express = require("express");
const router = express.Router();
const ctrWrapper = require('../../middlewares/ctrWrapper');
const auth = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');
const {getCurrent, updateSubscrition, updateByIdSubscrition, updateAvatar} = require('../../controllers/users/index');

router.get('/current', auth, ctrWrapper(getCurrent));
router.patch('/current/subscription', auth, ctrWrapper(updateSubscrition));//Обновление подписки только зарегистрированного пользователя (subscription) пользователя
router.patch('/:id/subscription', ctrWrapper(updateByIdSubscrition));//Обновление подписки любого пользователя по ID(subscription)
router.patch('/avatars', auth, upload.single('avatar'), ctrWrapper(updateAvatar));
module.exports = router;