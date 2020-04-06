const get = (element) => {
  return document.querySelector(element);
};

const menuButton = get(".toggleNav");
const nav = get(".flex-nav ul");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
