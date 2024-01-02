const express = require('express');
const app = express();

const port = process.env.PORT || 5000

//test test

app.get('/', ( req, res) => res.send('Modified for botpack JOEL'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);
