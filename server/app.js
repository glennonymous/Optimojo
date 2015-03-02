var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var ListModel = require('./models/list-model');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.get('/list', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    ListModel.find(modelParams, function (err, items) {
        res.send(items);
    });

});

app.post('/list', function (req, res) {

    // Reference schema for what is expected as the POST body.
    var listData = req.body;

    ListModel.create(listData).then(function () {
        res.status(200).end();
    });

});