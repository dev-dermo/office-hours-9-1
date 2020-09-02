$(document).ready(function() {
	let elName = $('#name');
	let elDesc = $('#desc');
	let elSubmit = $('#submit');

	elName.text('Diarmuid');
	elDesc.html('<p>Wears a green shirt.</p>');
	elSubmit.addClass('btn btn-primary');
	elSubmit.attr('disabled', true);
});