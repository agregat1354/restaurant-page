import "../css/nav.css";
import "../css/main.css";
import "../assets/images/oldcamp.webp";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact";
let selectCnt = 0;

const content = document.querySelector("#content");
function clearContent() {
  content.innerHTML = "";
}

function contentSetup() {
  content.classList.add("main-container");
}

function select(tab) {
  console.log(selectCnt++);
  const home = document.querySelector(".home-tab");
  const menu = document.querySelector(".menu-tab");
  const contact = document.querySelector(".contact-tab");

  console.log("selecting", tab);
  home.classList.forEach((elem) => {
    if (elem === "tab-selected") {
      console.log("removing ", home);
      home.classList.remove("tab-selected");
      tab.classList.add("tab-selected");
      return;
    }
  });
  menu.classList.forEach((elem) => {
    console.log("removing ", menu);
    if (elem === "tab-selected") {
      menu.classList.remove("tab-selected");
      tab.classList.add("tab-selected");
      return;
    }
  });
  contact.classList.forEach((elem) => {
    if (elem === "tab-selected") {
      console.log("removing ", contact);
      contact.classList.remove("tab-selected");
      tab.classList.add("tab-selected");
      return;
    }
  });
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

  home.addEventListener("click", (ev) => {
    contentSetup();
    loadHome();
    select(home);
  });

  menu.addEventListener("click", (ev) => {
    contentSetup();
    loadMenu();
    select(menu);
  });

  contact.addEventListener("click", (ev) => {
    contentSetup();
    loadContact();
    select(contact);
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  navContainer.appendChild(nav);
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  contentContainer.insertBefore(navContainer, contentContainer.firstChild);
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  contentContainer.appendChild(pageContent);
  content.appendChild(contentContainer);
  console.log("t1", document.querySelector(".page-content"));
  contentSetup();
  console.log("t2", document.querySelector(".page-content"));
  loadHome();
  console.log("t3", document.querySelector(".page-content"));
  home.classList.add("tab-selected");
}

export default createNav;
