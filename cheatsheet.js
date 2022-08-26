let cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("mouseenter", function () {
    enterSkew(card.firstElementChild);
  })
);

cards.forEach((card) =>
  card.addEventListener("mouseleave", function () {
    leaveSkew(card.firstElementChild);
  })
);

function enterSkew(element) {
  element.style.transform = "skew(45deg, 45deg)";
}

function leaveSkew(element) {
  element.style.transform = "skew(0, 0)";
}
