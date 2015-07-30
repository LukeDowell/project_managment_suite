/**
 * Created by lukedowell on 7/30/15.
 */
var express = require('express');
var path = require('path');
var employeeFactory = require('./modules/employeefactory');
var app = express();

//Set data
app.set('port', (process.env.PORT || 5000));

//Routing
app.get("/employee-request", function(req, res) {
    console.log(req);
});

app.get('/*', function(req, res) {
    var file = req.params[0] || "./views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

//Start web server
var server = app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});