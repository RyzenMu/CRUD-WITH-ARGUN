const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', function(req, res){
    res.send('Hello World');
});

router.get('/test', function(req, res){
    res.send('Hello test1');
});
app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);