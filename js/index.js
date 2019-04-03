const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  this.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
