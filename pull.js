var isOut = 1;
var width = "140px";
$( document ).ready(function() {
$(".pull-out").css("top", "-" + width)
	$(".pull-out").css("top", width)
	$("#pull-button").click(function(){
		if (isOut == 0) {
			$(".pull-out").css("top", width)
			isOut = 1;
		}else if (isOut == 1){
			$(".pull-out").css("top", "80px")
			isOut = 0;
		}
	});
});