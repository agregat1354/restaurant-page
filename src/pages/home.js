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
  paragraph.textContent =
    " We are the best restaurant you'll ever find. Our food is always fresh, delicious and reasonably priced.";
  paragraph.classList.add("restaurant-description");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  contentContainer.appendChild(header);
  contentContainer.appendChild(restaurantImage);
  contentContainer.appendChild(paragraph);

  content.appendChild(contentContainer);
}

export default load;
