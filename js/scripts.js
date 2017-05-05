var map = document.querySelector(".contacts-map");
var writeUs = document.querySelector("#write-us");
var popup = document.querySelectorAll(".popup");
var popupMap = document.querySelector(".popup--map");
var popupFb = document.querySelector(".popup--fb");
var googleMap = document.querySelector(".contacts-map__img");
var popupClose = document.querySelectorAll(".popup-close");

map.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("popup-show");
});

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupFb.classList.add("popup-show");
});

for (var i = 0; i < popupClose.length; i++) {
	popupClose[i].addEventListener("click", function(evt) {
		for (var j = 0; j < popup.length; j++) {
			popup[j].classList.remove("popup-show");
		}
	});
};
