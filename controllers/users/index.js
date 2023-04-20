
const getCurrent = require('../users/getCurrent');
const updateSubscrition = require('../../controllers/users/updateSub');
const updateByIdSubscrition = require('../users/updateByIdSub');
const updateAvatar = require('../users/updateAvatar');
module.exports = {
	getCurrent,
	updateSubscrition,
	updateByIdSubscrition,
	updateAvatar
}