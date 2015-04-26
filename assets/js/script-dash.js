$(document).ready(function(){
	$('.levels').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 2
	});

	$(".triangle-up").click(function () {
		var currResource = parseInt($(this).parent().children('.resource-number').text());
		if ($(this).parent().is('#lives')) {
			if(currencyCheck(-10)){
				$('#lives').children('.resource-number').text(currResource + 1);
			}
		} else {
			if (currencyCheck(-5)) {
				$('#hints').children('.resource-number').text(currResource + 1);
			}
		}
	})

	$(".triangle-down").click(function () {
		var currResource = parseInt($(this).parent().children('.resource-number').text());
		if (currResource > 0){
			if ($(this).parent().is('#lives')) {
				currencyCheck(10);
				$('#lives').children('.resource-number').text(currResource - 1);
			} else {
				currencyCheck(5);
				$('#hints').children('.resource-number').text(currResource - 1);
			}
		}
	})

	var currencyCheck = function (amount) {
		var currentCurr = parseInt($('#currency-number').text());
		if ((currentCurr + amount) > 0){
			$('#currency-number').text(currentCurr + amount);
			return true;
		}
		else {
			return false;
		}

	}

	$('.level-labels').click(function() {
		$('.level-labels').css('border', 'solid #AB1461');
		$(this).css('border', 'solid #4CB4A5');
	})
				
});