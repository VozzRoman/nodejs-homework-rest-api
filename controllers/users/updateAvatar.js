const User = require('../../models/user');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '../../', "public", "avatars"); // путь к папке public

const updateAvatar = async (req, res) => {
	console.log('REQ-AVA',req.file)
	const {path: tempUpload , originalname} = req.file;
	const {_id: id} = req.user;
	const imageName = `${id}_${originalname}`; //добовляем уникальность аватору
try {
	const resultUpload = path.join(avatarDir, imageName);

	const imgeCrop = await Jimp.read(tempUpload);
	await imgeCrop.autocrop().cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(tempUpload);

	await fs.rename(tempUpload, resultUpload);
	const avataruRL = path.join('public', 'avatars', imageName); // если все хорошо то создаем путь для кртинки и сохраняем
	 await User.findByIdAndUpdate(req.user._id, {avataruRL});
	 res.json({avataruRL});
} catch (error) {
	await fs.unlink(tempUpload); // если не получится загрузить картинку то удаляем из папки
	throw error;
	
}
}

module.exports = updateAvatar;