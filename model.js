const {getModel} = require("./schema");

const User = getModel();

exports.addNewRecord = () => {
	let newUser = new User({
		name: "Harshdeep Singh",
		sid: "300358044"
	});
	return newUser.save();
}
