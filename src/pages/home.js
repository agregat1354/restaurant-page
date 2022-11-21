import image from "../assets/images/snaf.webp";
import "../css/style.css";
const content = document.querySelector("#content");
const homeButton = document.querySelector("home-tab");
function load() {
  const header = document.createElement("h1");
  header.innerText = "Restaurant Page";
  header.classList.add("main-title");

  const restaurantImage = new Image();
  restaurantImage.src = image;

  const paragraph = document.createElement("p");
  paragraph.textContent =
    " We are the best restaurant you'll ever find. Our food is always fresh, delicious and reasonably priced.";
  content.appendChild(header);
  content.appendChild(restaurantImage);
  content.appendChild(paragraph);
}

export default load;
