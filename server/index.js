const config = require('./config/config');

const express = require('express')
const app = express()
const port = config.port;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server started on port ${port}!`))