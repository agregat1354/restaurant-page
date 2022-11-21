import image from "../assets/images/snaf.webp";
import "../css/home.css";
const content = document.querySelector("#content");
function load() {
  const header = document.createElement("h1");
  header.innerText = "Restaurant Page";
  header.classList.add("main-title");

  const restaurantImage = new Image();
  restaurantImage.src = image;
  restaurantImage.classList.add("home-img");

  const paragraph = document.createElement("p");
  // paragraph.textContent =
  //   " We are the best restaurant you'll ever find. Our food is always fresh, delicious and reasonably priced.";
  paragraph.innerHTML +=
    "W całym Khorinis<br>Moja kuchnia jest najlepsza<br>Jeśli spróbujesz czegoś<br>Nie dasz rady przestać.";
  paragraph.classList.add("restaurant-description");
  const descriptionWrapper = document.createElement("div");
  descriptionWrapper.classList.add("description-wrapper");
  descriptionWrapper.appendChild(paragraph);
  const pageContent = document.querySelector(".page-content");
  pageContent.innerHTML = "";
  const main = document.createElement("div");
  main.classList.add("main");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.appendChild(header);
  wrapper.appendChild(restaurantImage);
  wrapper.appendChild(descriptionWrapper);
  main.appendChild(wrapper);
  pageContent.appendChild(main);
}

export default load;
