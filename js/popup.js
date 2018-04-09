
var button = document.querySelector(".button-booking");
var popup = document.querySelector(".booking-form");
var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=checkout]");

var form = document.querySelector("form");

popup.classList.remove("modal-show");

button.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.toggle("modal-show");
 entrancedate.focus();
});

form.addEventListener("submit", function(evt) {
 if (!checkin.value || !checkout.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
 }
});
