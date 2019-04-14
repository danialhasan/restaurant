//Project start date: January 29, 2019.
var burger = document.getElementById("burger");
var listContainer = document.getElementById("listContainer");
var count = 0;
burger.addEventListener("click", function () {
	if (count == 0) {
		listContainer.style.display = "block"

		count = 1
	} else if (count == 1) {
		listContainer.style.display = "none"
		count = 0
	}
});

function animateMenuBar(x) {
	x.classList.toggle("change");
}
