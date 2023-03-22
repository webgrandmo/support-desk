const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected on host: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`Error: ${error.messages}`.red.underline.bold);
		process.exit(1);
	}
};

module.exports = connectDB;
