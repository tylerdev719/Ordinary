require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;
const Posts = require('./Posts.json');

app.get('/', (req, res) => {
	console.log('Home');
	// res.json(Posts);
    res.send('Home');
});

app.get('/posts', (req, res) => res.json(Posts));

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
