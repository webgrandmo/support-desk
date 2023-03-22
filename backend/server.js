const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const app = express();
const connectDB = require('./config/db');

const PORT = dotenv.PORT || 5000;

// Connect MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', (req, res) => {
// 	res.status(200).json({ message: 'Welcome to the Support Desk API' });
// });

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});
