const openButton = document.querySelector(".button-open");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".button-close");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal(event) {
  document.body.classList.add("show-modal");

  backdrop.style.opacity = 1;

  backdrop.style.visibility = "visible";

  backdrop.style.pointerEvents = "initial";
}

function closeModal(event) {}
