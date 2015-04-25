$(document).ready(function(){
	$('.levels').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 2
	});

	var waypoint = new Waypoint({
		element: document.getElementsByClassName('question-hexagon'),
		handler: function(direction) {
			if(direction == 'down'){
				console.log("down");
				$('#question-answer').fadeIn(300);
				$('#question-answer').css('position', 'fixed');
				$('#question-answer').css('top', '80');
				$('.question-hexagon').css('position', 'fixed');
				$('.question-hexagon').css('top', '65');

			} else {
				$('#question-answer').fadeOut(300);
				$('#question-answer').css('position', 'absolute');
				$('#question-answer').css('top', '115');
				$('.question-hexagon').css('position', 'absolute');
				$('.question-hexagon').css('top', '100');
			}

		},
		offset: 80
	})

	// var sticky1 = new Waypoint.Sticky({
	// 	element: $('.question-hexagon')[0],
	// 	offset: 80
	// })

	// var sticky2 = new Waypoint.Sticky({
	// 	element: $('#question-answer')[0],
	// 	offset: 80
	// })
				
});