import fricassee from "../assets/images/fricassee.webp";
import rice from "../assets/images/rice.webp";
import minersmeat from "../assets/images/minersmeat.webp";

import "../css/menu.css";
// import { ContextReplacementPlugin } from "webpack";
const content = document.querySelector("#content");

function loadMenu() {
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  const riceImg = new Image();
  riceImg.src = rice;
  riceImg.classList.add("menu-img");
  const riceDescription = document.createElement("p");
  riceDescription.textContent = "Oo, zajebiście! Znowu ryż.";

  const fricasseeImg = new Image();
  fricasseeImg.src = fricassee;
  fricasseeImg.classList.add("menu-img");
  const fricasseeDescription = document.createElement("p");
  fricasseeDescription.textContent = "Potrawka z chrząszcza a'la Snaf.";

  const minersMeatImg = new Image();
  minersMeatImg.src = minersmeat;
  minersMeatImg.classList.add("menu-img");
  const minersMeatDescription = document.createElement("p");
  minersMeatDescription.textContent =
    "Może i nie przydaje się w alchemii, ale za to smakuje średnio.";

  const riceWrapper = document.createElement("div");
  const fricasseeWrapper = document.createElement("div");
  const minersMeatWrapper = document.createElement("div");

  riceWrapper.classList.add("menu-entry");
  fricasseeWrapper.classList.add("menu-entry");
  minersMeatWrapper.classList.add("menu-entry");

  const main = document.createElement("main");
  main.classList.add("main");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  riceWrapper.appendChild(riceImg);
  riceWrapper.appendChild(riceDescription);

  fricasseeWrapper.appendChild(fricasseeImg);
  fricasseeWrapper.appendChild(fricasseeDescription);

  minersMeatWrapper.appendChild(minersMeatImg);
  minersMeatWrapper.appendChild(minersMeatDescription);

  menuContainer.appendChild(riceWrapper);
  menuContainer.appendChild(fricasseeWrapper);
  menuContainer.appendChild(minersMeatWrapper);

  main.appendChild(menuContainer);
  content.appendChild(main);
}

export default loadMenu;
