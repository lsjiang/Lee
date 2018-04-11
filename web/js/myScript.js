function myFunction1() {
	// document.getElementById("button1").onclick = function() {
	// 	location.href = 'login.html';
	// };
	location.href = 'login.html';
}

$(document).ready(function() {
	$(document).ready(function() {
		var outerContent = $('.scrollbar');
		var innerContent = $('.scrollbar > div');

		outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
	});
});