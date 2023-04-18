const User = require('../../models/user');
const {subscriptionSchema} = require('../../utils/index')
const {NotFound} = require('http-errors');

const updateByIdSubscrition = async (req, res) => {
	console.log(req.body);
	const {error} = subscriptionSchema.validate(req.body);
	if(error) {
		error.status = 400;
		error.message = "wrong value";
      throw error;
	}
	const {id} = req.params;
	const {subscription} = req.body;
	const result = await User.findByIdAndUpdate(id, {subscription}, {new: true});
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


module.exports = updateByIdSubscrition;