$(document).ready(function(){

	$('#button-').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );
	});

	$('#button-29').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-30').click(function() {
		$(this).next('.item').toggleClass('circle');
	});

	$('#button-35').click(function() {
		$(this).toggleClass('tol');
		$('#button-38').toggleClass('large');
	});

	$('#button-39').click(function() {
		$(this).toggleClass('img02');
	});

	$('#button-40').click(function() {
		$(this).removeClass('item');
	});

	$('#button-43').click(function() {
		$('#button-39').toggleClass('tol2');
		$('#button-40').toggleClass('tol2');
		$('#button-41').toggleClass('tol2');
		$('#button-42').toggleClass('tol2');
	});

	$('#button-44').click(function() {
		$(this).toggleClass('spinyspin');
	});

	$('#button-45').click(function() {
		$(this).toggleClass('extratol');
	});

	$('#button-46').click(function() {
		$(this).toggleClass('citrus');
	});

	$('#button-47').click(function() {
		$(this).toggleClass('jumper');
	});

	$('#button-48').click(function() {
		$(this).toggleClass('warping');
	});

	$('#button-49').click(function() {
		$(this).toggleClass('pong');
	});

	$('#button-50').click(function() {
   //this points to item
   alert('Fin.');
});

	// check when the mouse moves
	$('#button-31').mousemove(function(e){

		// update mouse x and y position
		var xPos = e.pageX-235;
		var yPos = e.pageY+235;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
	});

	$('#button-33').mousemove(function(e){

		// update mouse x and y position
		var xPos = e.pageX-125;
		var yPos = e.pageY-125;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
	});

});
