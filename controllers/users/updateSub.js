
const User = require('../../models/user');
const {subscriptionSchema} = require('../../utils/index')
const {NotFound} = require('http-errors');

const updateSubscription = async (req, res) => {
	console.log(req.body);
	const {error} = subscriptionSchema.validate(req.body);
	if(error) {
		error.status = 400;
		error.message = "wrong value";
      throw error;
	}
	// const {id} = req.params;
	console.log("ROMAN---->",req.user);
	const {_id} = req.user;
	const {subscription} = req.body;
	const result = await User.findByIdAndUpdate(_id, {subscription}, {new: true});
	console.log('SUBSCRIP----->', result);
	if(!result){
		throw new NotFound(`User with id=${id} not found`);
	}
	res.json({
		status: 'success',
		code: 200,
		data: {
			result,
		}
	})
console.log()
};


module.exports = updateSubscription;