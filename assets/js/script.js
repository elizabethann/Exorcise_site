$(document).ready(function(){
	$('.levels').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 2
	});

	var waypoint1 = new Waypoint({
		element: document.getElementById('question1'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#answer1').slideDown();
				$('#answer1').css('position', 'fixed');
				$('#answer1').css('top', '80');
				$('#question1').css('position', 'fixed');
				$('#question1').css('top', '65');
				$('#selection1').css('height', '700')
				$('#question2').css('top', '1385');
				$('#question3').css('top', '1590');

			} else {
				$('#answer1').slideUp();
				$('#answer1').css('position', 'absolute');
				$('#answer1').css('top', '699');
				$('#question1').css('position', 'absolute');
				$('#question1').css('top', '684');
				$('#selection1').css('height', '205')
				$('#question2').css('top', '890');
				$('#question3').css('top', '1095');
			}

		},
		offset: 80
	})

	var waypoint2 = new Waypoint({
		element: document.getElementById('dummy-waypoint1'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#answer2').slideDown();
				$('#answer2').css('position', 'fixed');
				$('#answer2').css('top', '80');
				$('#question2').css('position', 'fixed');
				$('#question2').css('top', '65');
				$('#selection2').css('height', '700')
				$('#question3').css('top', '2085');

			} else {
				$('#answer2').slideUp();
				$('#answer2').css('position', 'absolute');
				$('#answer2').css('top', '699');
				$('#question2').css('position', 'absolute');
				$('#question2').css('top', '1385');
				$('#selection2').css('height', '205')
				$('#question3').css('top', '1590');
			}

		},
		offset: 80
	})

	var waypoint3 = new Waypoint({
		element: document.getElementById('dummy-waypoint2'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#answer3').slideDown();
				$('#answer3').css('position', 'fixed');
				$('#answer3').css('top', '80');
				$('#question3').css('position', 'fixed');
				$('#question3').css('top', '65');
				$('#selection3').css('height', '700')

			} else {
				$('#answer3').slideUp();
				$('#answer3').css('position', 'absolute');
				$('#answer3').css('top', '699');
				$('#question3').css('position', 'absolute');
				$('#question3').css('top', '2085');
				$('#selection3').css('height', '205')
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