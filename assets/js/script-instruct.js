$(document).ready(function(){

	var step1 = new Waypoint({
		element: document.getElementById('step1'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#step1').css('color', 'AB1461');

			} else {
				$('#step1').css('color', 'white');
			}

		},
		offset: 150
	})

	var step2 = new Waypoint({
		element: document.getElementById('step2'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#step2').css('color', 'AB1461');

			} else {
				$('#step2').css('color', 'white');
			}

		},
		offset: 150
	})

	var step3 = new Waypoint({
		element: document.getElementById('step3'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#step3').css('color', 'AB1461');

			} else {
				$('#step3').css('color', 'white');
			}

		},
		offset: 150
	})

	var step4 = new Waypoint({
		element: document.getElementById('step4'),
		handler: function(direction) {
			if(direction == 'down'){
				$('#step4').css('color', 'AB1461');

			} else {
				$('#step4').css('color', 'white');
			}

		},
		offset: 150
	})

				
});