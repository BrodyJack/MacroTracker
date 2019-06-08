const config = require('./config/config');
const routes = require('./routes');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.server = http.createServer();
app.disable('x-powered-by');
app.use(bodyParser.json());

const port = config.port;

app.use('/', routes());

app.listen(port, () => console.log(`Server started on port ${port}!`));
