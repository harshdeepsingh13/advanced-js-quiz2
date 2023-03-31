const mongoose = require('mongoose');
const {model} = mongoose;

const User = new mongoose.Schema({
	name: {type: String, required: true},
	sid: {type: String, required: true}
});

const getModel = () => model("quizes", User);

module.exports = {schema: User, getModel}
