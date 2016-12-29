'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

let port = process.env.PORT || 3000;

app.use('/lib', express.static(__dirname+'/lib'));


app.use(function(req, res, next){
	console.log("all routes should send to index")
	res.sendFile(path.join(__dirname, 'index.html'));
})


http.listen(port, function(){
	console.log("The magic happens on port "+ port);
});