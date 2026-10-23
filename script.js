function setActiveTheme(target) {
  let card = target.closest(".cake-card");

  if (card) {
    document.body.dataset.theme = card.dataset.theme;
  } else {
    delete document.body.dataset.theme;
  }
}

window.addEventListener("mousemove", function (event) {
  document.getElementById("client-x").textContent = event.clientX;
  document.getElementById("client-y").textContent = event.clientY;
  setActiveTheme(event.target);
});

window.addEventListener("focusin", function (event) {
  setActiveTheme(event.target);
});

window.addEventListener("focusout", function (event) {
  if (!event.relatedTarget || !event.relatedTarget.closest(".cake-card")) {
    delete document.body.dataset.theme;
  }
});
