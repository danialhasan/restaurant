//Project start date: January 29, 2019.
var burger = document.getElementById("burger");
var listContainer = document.getElementById("listContainer");
var count = 0;
burger.addEventListener("click", function () { //when burger is clicked/menu is accessed, make menu item readable.
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

var images = [
    'Assets/image0.jpg',
    'Assets/image1.jpg',
    'Assets/image2.jpg',
    'Assets/image3.jpg',
    'Assets/image4.jpg']
var carouselImage = document.getElementById("carouselImage");
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var subtext = document.getElementById("featuredFoodSubtext");
var description = document.getElementById("featuredFoodDescription");
var subtextInnerHTML = [
    "item0",
    "item1",
    "item2",
    "item3",
    "item4"
];
var descriptionInnerHTML = [
    "item0",
    "item1",
    "item2",
    "item3",
    "item4"
];
window.onload = function () {
    var i = 0;
    nextButton.addEventListener("click", function () {
        if (i < images.length - 1) {
            i++;
            subtext.innerHTML = "Hello!";

        } else {
            i = 0;
        }
        carouselImage.src = images[i];
        subtext.innerHTML = subtextInnerHTML[i];
        description.innerHTML = descriptionInnerHTML[i];
    });

    // changed values of 'i' is locked inside the functions
    previousButton.addEventListener("click", function () {
        if (i > 0) {
            i--;
            //            alert(i);

        } else if (i == 0) {
            i = images.length - 1;
            //            alert(i);

        }
        carouselImage.src = images[i];
        subtext.innerHTML = subtextInnerHTML[i];
        description.innerHTML = descriptionInnerHTML[i];
    })
}
/*
    #todo: make arrays for each html element that will be changed, with their different values. Make this match 'i'.
    #example: var subtextInnerHTML = ["biryani", "noodles"];
    #           subtext.innerHTML = subtextInnerHTML[i];
*/
