$('.mybutton').click(function() {

	var emailAddress = $('#email').val();
	var password = $('#password').val();

	if (emailAddress.length > 0) {
		console.log('email address is there');
	} else {
		$('#email').addClass('error');
		$('#email').effect('shake', 200);
		$('.mybutton').effect('shake', 200);
	}


})