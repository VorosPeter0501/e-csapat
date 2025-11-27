require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

if (process.env.NODE_ENV !== 'test') {
	mongoose.connect(mongoString);
}

const database = mongoose.connection;
database.on('error', (error) => {
console.log(error)
}) 

database.once('connected', () => {
console.log('Database Connected');
})

const app = express();
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api/markak', routes); // Minden végpont ezzel az URL-lel fog kezdődni


if (process.env.NODE_ENV !== 'test') {
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
		console.log(`Server Started at ${PORT}`);
	});
}

module.exports = app;