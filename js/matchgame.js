$(function(){
	//clone 12 copies of the card
	for(var i = 0; i < 11; i++){
		$(".card:first-child").clone().appendTo("#cards");
	}
	//Initialize each card's position
		$("#cards").children().each(function(index){
		//align cards to be 4 x 3 
		$(this).css({
			"left" : ($(this).width() + 20) * (index % 4),
			"top" : ($(this).height() + 20) * Math.floor(index / 4)
		});
	});
});