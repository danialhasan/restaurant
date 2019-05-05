$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 150) {
			$("#navbar").css("background", "rgba(20, 20, 20, 0.8)");
			$("#navbar").css("transition", "background-color 200ms linear");
			$(".menuItem").css("color", "rgb(240, 240, 240)")
		} else {
			$("#navbar").css("background", "rgb(240, 240, 240)");
			$(".menuItem").css("color", "rgb(20, 20, 20)")
		}
	})
})