var express = require('express');
var nodemailer = require('nodemailer');


var app = express();

app.use(express.static('public'));
app.use(express.static('javascript'));

//accesing the home page root
app.get('/', function(req,res){
	res.sendFile('html/index.html',{"root":__dirname});
});

app.get('/contact', function (req,res) {
	res.sendFile('html/contact.html', {"root":__dirname});
});

app.listen(3000, function(){
	console.log("Express is Listening on Portal 3000");
})