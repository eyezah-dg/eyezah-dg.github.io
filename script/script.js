$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){  //time
				window.location.hash = hash;
			});
		}
	});
});

setInterval(function() {
	if (document.documentElement.scrollTop > (document.getElementById('pageload-container').clientHeight / 2)) {
		if (document.getElementById('pageload-container').clientWidth > 600) {
			document.getElementById('title').style.fontSize = '6em';
		} else {
			document.getElementById('title').style.fontSize = '4.1em';
		}
	} else {
		document.getElementById('title').style.fontSize = '4em';
	}
	document.getElementById('section2-h3').style.left = ((document.getElementById('section2-h3').offsetTop / -15) + (document.documentElement.scrollTop / 60)) + 'px';
}, 0);