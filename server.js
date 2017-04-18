// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var http = require('http');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type:'application/vnd.api+json'
}));

// ===========================================================
app.use(express.static('public'));
app.use(express.static('javascript'));

//accessing the Front/html pages
// ===========================================================

app.get('/', function(req,res){
	res.sendFile('html/index.html',{"root":__dirname});
	console.log("nodemailer reading" + req.url);
});

app.get('/contact', function (req,res) {
	res.sendFile('html/contact.html', {"root":__dirname});
});

app.get('/aboutme', function (req,res) {
	res.sendFile('html/about.html', {"root":__dirname});
});
//nodemailer sending mail functions
// ===========================================================
//sending mail function
	// sending mail function
app.post('/contact', function(req, res){
if(req.body.email == "" || req.body.subject == "") {
  res.send("Error: Email & Subject should not blank");
  return false;
}
if (req.body.email) {
	res.send(req.body.email);
}
res.send(req.body);

   // Sending Emails with SMTP, Configuring SMTP settings

    var smtpTransport = nodemailer.createTransport({
             host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
            auth: {
                 user: 'sanquinluis@gmail.com',
                 pass: ''
            }
        });
        var mailOptions = {
            from: "Node Emailer ✔ <sanquinluis@gmail.com>", // sender address
            to: req.body.email, // list of receivers
            subject: req.body.subject+" ✔", // Subject line
            //text: "Hello world ✔", // plaintext body
            html: "<b>"+req.body.description+"</b>" // html body
        }
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});
		
// sending email using SMTP configuration
//Server is listening.
// ===========================================================

app.listen(PORT, function(){
	console.log("Express is Listening on Portal 3000");
})