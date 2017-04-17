$(document).ready(function(){

	var video = document.getElementById("intro-video");

	$('#intro-play-btn').on('click', function(event) {
		//event.preventDefault();
		$(this).addClass('transparent')
		$('#intro-video').addClass('active');

		function videoPlay(){
		  video.play();
		}
		setTimeout(videoPlay, 1200);

		var headerContent = new TimelineMax();

		headerContent
			.to(".logo", 1, {autoAlpha: 1, ease: Power3.easeInOut}, '+26.5')
			.to('#intro .btn-preorder', 1, {autoAlpha: 1, ease: Power3.easeInOut}, "-=0.5")
			.to('#intro h1', 1, {autoAlpha: 1, ease: Power3.easeInOut})
			.fromTo('#intro h1 .left', 1, {marginRight: '13%', autoAlpha: 0, ease: Power2.easeInOut}, {marginRight: '15%', autoAlpha: 1, ease: Power2.easeInOut}, "-=0.5")
			.fromTo('#intro h1 .right', 1, {marginLeft: '13%', autoAlpha: 0, ease: Power2.easeInOut}, {marginLeft: '15%', autoAlpha: 1, ease: Power2.easeInOut}, "-=0.5")
			.to('#intro .btn-watch', 1, {autoAlpha: 1, ease: Power3.easeInOut}, "-=0.5")
			.to('#intro #scrollDown', 1, {autoAlpha: 1, ease: Power3.easeInOut}, "-=0.5")
			.to('#intro', 1, {'position': 'static', ease: Power3.easeInOut});

		function showScrollbar(){
			$('html').addClass('show-scrollbar');
			$(window).animate({scrollTop(0)});
		}
		setTimeout(showScrollbar, 31000);
		
	});

	

	$('.arrow-l').on('click', function(event) {
		$('.1').removeClass('left-side 1').addClass('right-side');
		$('.2').removeClass('active no-blur 2').addClass('blur left-side');
		$('.3').removeClass('blur right-side 3').addClass('active no-blur');
		$('.left-side').addClass('1');
		$('.active').addClass('2');
		$('.right-side').addClass('3');
	});

	$('.arrow-r').on('click', function(event) {
		$('.1').removeClass('left-side  blur 1').addClass('active no-blur');
		$('.2').removeClass('active no-blur 2').addClass('blur right-side');
		$('.3').removeClass('right-side 3').addClass('left-side');
		$('.left-side').addClass('1');
		$('.active').addClass('2');
		$('.right-side').addClass('3');
	});

});