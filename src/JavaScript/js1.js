// знайшов усі елементи, які мені потрібні на сторінці
const openButton = document.querySelector(".button-open");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".button-close");

// задаю події
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal(event) {
  // Line 1: Adds the class "show-modal" to the <body> element.
  // This class is used to apply specific styles to the body and its children (the modal and backdrop) when the modal is open.
  document.body.classList.add("show-modal");

  // Line 2: Sets the opacity of the backdrop to 1.
  // This makes the backdrop fully opaque (visible). The transition property in the CSS ensures that this change happens smoothly over time.
  backdrop.style.opacity = 1;

  // Line 3: Sets the visibility of the backdrop to "visible".
  // This makes the backdrop element visible. Without this, even if the opacity is set to 1, the element might not be displayed.
  backdrop.style.visibility = "visible";

  // Line 4: Sets the pointer-events of the backdrop to "initial".
  // This allows the backdrop to be interactive (i.e., it can receive mouse events like clicks).
  backdrop.style.pointerEvents = "initial";
}

function closeModal(event) {
  // Line 1: Removes the class "show-modal" from the <body> element.
  // This class removal reverses the styles applied when the modal was open, including hiding the modal and backdrop.
  document.body.classList.remove("show-modal");

  // Line 2: Sets the opacity of the backdrop to 0.
  // This makes the backdrop fully transparent (invisible). The transition property in the CSS ensures that this change happens smoothly over time.
  backdrop.style.opacity = 0;

  // Line 3: Sets the visibility of the backdrop to "hidden".
  // This hides the backdrop element. Even if the opacity is 0, setting visibility to hidden ensures that the element is not displayed at all.
  backdrop.style.visibility = "hidden";

  // Line 4: Sets the pointer-events of the backdrop to "none".
  // This makes the backdrop non-interactive, preventing it from receiving mouse events like clicks.
  backdrop.style.pointerEvents = "none";
}

// Пояснення від ШІ
// document.body.classList.add("show-modal"); / document.body.classList.remove("show-modal");

// These lines add or remove the show-modal class from the <body> element. This class is used to trigger specific styles for the modal and backdrop when the modal is open or closed.
// backdrop.style.opacity = 1; / backdrop.style.opacity = 0;

// These lines change the opacity of the backdrop. Setting it to 1 makes it fully opaque (visible), and setting it to 0 makes it fully transparent (invisible).
// backdrop.style.visibility = "visible"; / backdrop.style.visibility = "hidden";

// These lines change the visibility of the backdrop. Setting it to visible makes the element visible, and setting it to hidden hides the element entirely.
// backdrop.style.pointerEvents = "initial"; / backdrop.style.pointerEvents = "none";

// These lines change the pointer-events property of the backdrop. Setting it to initial makes the element interactive, allowing it to receive mouse events. Setting it to none makes the element non-interactive.
