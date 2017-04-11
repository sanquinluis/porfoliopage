// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ===========================================================
app.use(express.static('public'));
app.use(express.static('javascript'));

//accessing the html pages
// ===========================================================

app.get('/', function(req,res){
	res.sendFile('html/index.html',{"root":__dirname});
});

app.get('/contact', function (req,res) {
	res.sendFile('html/contact.html', {"root":__dirname});
});

app.get('/aboutme', function (req,res) {
	res.sendFile('html/about.html', {"root":__dirname});
});
//nodemailer 
// ===========================================================









//Server is listening.
// ===========================================================

app.listen(PORT, function(){
	console.log("Express is Listening on Portal 3000");
})