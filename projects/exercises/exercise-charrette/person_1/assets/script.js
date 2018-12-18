$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.1,
			marginLeft: '925px',
			fontSize: '24px',
			borderWidth: '60px'
		}, 600 );
	});

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$('#button-6').toggleClass('circle');
	});

	// button-7 counter
		$('#button-7').click(function() {
setInterval(counter, 60); // run counter function every second
	function counter() {
		var count = parseInt($("#button-7").html());  // get value of counter div
		var total = count+3;  // add 100 to value of counter div
		$("#button-7").html(total); // update counter div
	}
});

	// button-8
$(function () {
 $('#button-8').click(function() {
var parent = $(".container");
var divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}
});
$("#button-9").click(function() {
		var domElement = $('<div class="item circle" id="button-6">');
		$(this).after(domElement);
});
$("#button-10").click(function() {
	alert("No why.");
});

$("#button-11").click(function(e) {
	alert(e.pageX+ ' , ' + e.pageY);
});

$('#button-12').click(function() {
	$(this).toggleClass('bigiftrue');
});
$("#button-13").click(function(){
	var d = new Date($.now());
	alert(d.getDay()+"-"+d.getMonth()+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
});


});
});
