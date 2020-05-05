"use strict";
jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit').prop('disabled', true)
			.html('<i class="fa fa-refresh"></i> SENDING ...').css({
				"cursor":"not-allowed"
			});

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			website: $('#website').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#submit').prop('disabled', false)
				.text('SUBMIT').css({
				"cursor":""
			});

			}
		);

		});

		return false;

	});

});