import "../css/nav.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

const content = document.querySelector("#content");
function clearContent() {
  content.innerHTML = "";
}

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

  function select(tab) {
    home.classList.forEach((elem) => {
      if (elem === "tab-selected") {
        home.classList.toggle("tab-selected");
        tab.classList.toggle("tab-selected");
        return;
      }
    });
    menu.classList.forEach((elem) => {
      if (elem === "tab-selected") {
        menu.classList.toggle("tab-selected");
        tab.classList.toggle("tab-selected");
        return;
      }
    });
    contact.classList.forEach((elem) => {
      if (elem === "tab-selected") {
        contact.classList.toggle("tab-selected");
        tab.classList.toggle("tab-selected");
        return;
      }
    });
  }

  home.addEventListener("click", (ev) => {
    clearContent();
    loadHome();
    select(home);
  });

  menu.addEventListener("click", (ev) => {
    clearContent();
    loadMenu();
    select(menu);
  });

  contact.addEventListener("click", (ev) => {
    clearContent();
    //loadContact();
    select(contact);
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  navContainer.appendChild(nav);
  document.body.insertBefore(navContainer, document.body.firstChild);
  loadHome();
  home.classList.add("tab-selected");
}

export default createNav;
