import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";

const content = document.querySelector("#content");
function clearContent() {
  content.innerHTML = "";
}

const nav = createNav();
document.body.insertBefore(nav, document.body.firstChild);
loadHome();

function createNav() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  const nav = document.createElement("ul");
  nav.classList.add("nav");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  home.classList.add("nav-tab");
  home.classList.add("home-tab");
  menu.classList.add("nav-tab");
  menu.classList.add("menu-tab");
  contact.classList.add("nav-tab");
  contact.classList.add("contact-tab");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.addEventListener("click", (ev) => {
    clearContent();
    loadHome();
  });

  menu.addEventListener("click", (ev) => {
    clearContent();
    loadMenu();
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  navContainer.appendChild(nav);
  return navContainer;
}
