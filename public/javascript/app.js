$( document ).ready(function() {

	// Contact.html to send email using nodemailer
	$('#send_email').click(function(event){
		event.preventDefault();
		var name = $('#name').val();
		var lastname = $('#lastname').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var message = $('#message').val();
		console.log(name, lastname, phone, email, message);
		if (name !==  '' && lastname !== '' && phone !== '' && email !== '' && message !== ''){
			console.log('post');
			$.post('http://localhost:3000/contact', 
			{
				name: name,
				lastname: lastname,
				phone: phone,
				email: email,
				message: message
			}
			, function(data) {
				if(data == 'sent') {
					$('.alert').html('<strong> Success! </strong> Your message has been sent!').addClass('sucess');
				} else {
					$('.alert').html("<strong> Ups! </strong> Your message didn't go through ").addClass('error');
				}
			});

		}
	});
});
