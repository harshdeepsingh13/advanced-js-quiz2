const mongoose = require('mongoose');

const mongooseConnectionURL = process.env.MONGODB_CONNCTION_URL

module.exports = () => {
	mongoose.set('strictQuery', true);
	mongoose.connect(mongooseConnectionURL, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(r => console.log("Connection with DB is successful."))
		.catch(err => console.log(`Error in connecting with DB - ${err}`));
}
