const content_text = document.querySelectorAll(".content_text");
const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  let number = e.target.dataset.number;
  let value = e.target.classList.contains("btn");

  if (value) {
    Speed(number);
    return;
  }
  e.stopPropagation();
});

const Speed = (number) => {
  for (let index of content_text) {
    index.classList.remove("block");
    index.dataset.seccion === number ? index.classList.add("block") : "";
  }
};

// Responsive Megamenu
const navModal = document.getElementById("navmodal");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");
const main = document.querySelector("main");

// Open Megamenu and Make Main Fixed Position
openMenu.addEventListener("click", function () {
	navModal.classList.add("active");
	main.classList.add("fixed");
});

// Close Megamenu and Remove Main Fixed Position
closeMenu.addEventListener("click", function () {
	navModal.classList.remove("active");
	main.classList.remove("fixed");
});
