const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('Mongo DB Connected'))
	.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on port ${port}`));
