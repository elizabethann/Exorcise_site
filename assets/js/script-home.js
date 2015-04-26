$(document).ready(function(){

	var waypoint1 = new Waypoint({
		element: document.getElementById('question1'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#home-container').css('height', '3240');
				$('#home-footer').css('top', '3240');
				$('#tombstone').fadeIn();
				$('#money').fadeIn();
				$('#answer1').slideDown();
				$('#answer1').css('position', 'fixed');
				$('#answer1').css('top', '79');
				$('#question1').css('position', 'fixed');
				$('#question1').css('top', '63');
				$('#selection1').css('height', '1600')
				$('#question2').css('top', '2285');
				$('#question3').css('top', '2490');
				$('.animations').css('position', 'fixed');
				$('.animations').css('top', '279');


			} else {
				$('#home-container').css('height', '1540');
				$('#home-footer').css('top', '1540');
				$('#tombstone').fadeOut();
				$('#money').fadeOut();
				$('#answer1').slideUp();
				$('#answer1').css('position', 'absolute');
				$('#answer1').css('top', '699');
				$('#question1').css('position', 'absolute');
				$('#question1').css('top', '684');
				$('#selection1').css('height', '205')
				$('#question2').css('top', '890');
				$('.animations').css('position', 'relative');
				$('#question3').css('top', '1095');
			}

		},
		offset: 80
	})

	var waypoint2 = new Waypoint({
		element: document.getElementById('dummy-waypoint1'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#home-container').css('height', '3930');
				$('#home-footer').css('top', '3930');
				$('#fitbit').fadeIn();
				$('#signal').fadeIn();
				$('#signal-heart').fadeIn();
				$('#answer2').slideDown();
				$('#answer2').css('position', 'fixed');
				$('#answer2').css('top', '79');
				$('#question2').css('position', 'fixed');
				$('#question2').css('top', '63');
				$('#selection2').css('height', '700')
				$('.animations').hide();
				$('#question3').css('top', '2985');

			} else {
				$('#home-container').css('height', '3240');
				$('#home-footer').css('top', '3240');
				$('#fitbit').fadeOut();
				$('#signal').fadeOut();
				$('#signal-heart').fadeOut();
				$('#answer2').slideUp();
				$('#answer2').css('position', 'absolute');
				$('#answer2').css('top', '699');
				$('#question2').css('position', 'absolute');
				$('#question2').css('top', '2285');
				$('#selection2').css('height', '205');
				$('.animations').show();
				$('#question3').css('top', '2290');
			}

		},
		offset: 80
	})

	var waypoint3 = new Waypoint({
		element: document.getElementById('dummy-waypoint2'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#home-container').css('height', '3930');
				$('#home-footer').css('top', '3930');
				$('#care-to').fadeIn()
				$('#exorcise-big').fadeIn();
				$('#selection3').children('#sign-up-button').fadeIn()
				$('#answer3').slideDown();
				$('#answer3').css('position', 'fixed');
				$('#answer3').css('top', '79');
				$('#question3').css('position', 'fixed');
				$('#question3').css('top', '63');
				$('#selection3').css('height', '800')

			} else {
				$('#home-container').css('height', '3930');
				$('#home-footer').css('top', '3930');
				$('#care-to').fadeOut()
				$('#exorcise-big').fadeOut();
				$('#selection3').children('#sign-up-button').fadeOut()
				$('#answer3').slideUp();
				$('#answer3').css('position', 'absolute');
				$('#answer3').css('top', '2985');
				$('#question3').css('position', 'absolute');
				$('#question3').css('top', '2985');
				$('#selection3').css('height', '205')
			}

		},
		offset: 80
	})

	var moneyFly = new Waypoint({
		element: document.getElementById('dummy-waypoint-tombstone'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#tombstone').css('position', 'fixed');
				$('#tombstone').css('top', '480');
			} else {
				$('#tombstone').css('position', 'relative');
				$('#tombstone').css('top', '600');
			}
		}
	})

	var tombstoneRelease = new Waypoint({
		element: document.getElementById('dummy-waypoint-tombstone-release'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#tombstone').css('position', 'relative');
				$('#tombstone').css('top', '770');
				$('#money').hide();

			} else {
				$('#tombstone').css('position', 'fixed');
				$('#tombstone').css('top', '480');
				$('#money').show();
			}
		}
	})

	var miles = new Waypoint({
		element: document.getElementById('dummy-waypoint-miles'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#miles-text').slideDown();
				$('#wall-box').slideDown();

			} else {
				$('#miles-text').slideUp();
				$('#wall-box').slideUp();
			}
		}
	})

	var miles = new Waypoint({
		element: document.getElementById('dummy-waypoint-miles-slide'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#miles-text').offset({left: 940});

			} else {
				$('#miles-text').offset({left: 400});
			}
		}
	})

	var lives = new Waypoint({
		element: document.getElementById('dummy-waypoint-lives'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#lives-home').fadeIn(300);
				$('#miles-text').css('opacity', '0');


			} else {
				$('#lives-home').fadeOut(300);
				$('#miles-text').css('opacity', '1');
			}
		}
	})

	var livesEnd = new Waypoint({
		element: document.getElementById('dummy-waypoint-lives-end'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#lives-home').fadeOut(300);
				$('#wall-box').fadeOut(300);


			} else {
				$('#lives-home').fadeIn(300);
				$('#wall-box').fadeIn(300);

			}
		}
	})

	$("#selection3").children( "#sign-up-button" ).mouseenter(function () {
		$('#exorcise-big').css('color', 'AB1461');
	})

	$("#selection3").children( "#sign-up-button" ).mouseleave(function () {
		$('#exorcise-big').css('color', 'white');
	})

});