const openButton = document.querySelector(".button-open");
const backdrop = document.querySelector(".backdrop");

openButton.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);

function openModal(event) {
  document.body.classList.add("show-modal");

  backdrop.style.opacity = 1;

  backdrop.style.visibility = "visible";

  backdrop.style.pointerEvents = "initial";
}
// в бібліотеках якось через window.onclick робили. Не зрозумів як
function closeModal(event) {
  document.body.classList.remove("show-modal");
  backdrop.style.opacity = 0;
  backdrop.style.visibility = "hidden";
  backdrop.style.pointerEvents = "none";
}
