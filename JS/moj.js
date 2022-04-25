const west = document.querySelector(".west");
const beach = document.querySelector(".beach");
const enlarge = document.querySelector(".enlarge");
const button = document.querySelector("button");
const smaller = document.querySelector(".small");
const arrow = document.querySelector(".arrow");
const big = document.querySelector(".big");
const mountainsowest = document.querySelector(".mountainsowest");
const buttonThree = document.querySelector(".buttonThree");

button.setAttribute("class", "buttonOne");

const upper = () => {
	west.classList.toggle("enlarge");
};
const small = () => {
	beach.classList.toggle("small");
};
const show = () => {
	mountainsowest.classList.toggle("big");

	if (mountainsowest.classList.contains("big")) {
		arrow.style.transform = "rotate(180deg)";
	} else {
		arrow.style.transform = "rotate(0)";
	}
};

button.addEventListener("click", upper);
button.addEventListener("click", small);
buttonThree.addEventListener("click", show);
