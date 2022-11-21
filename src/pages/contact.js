import snafImage from "../assets/images/snafpic.png";
import "../css/contact.css";
function load() {
  const image = new Image();
  image.src = snafImage;
  image.classList.add("profile-picture");

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Możesz mnie znaleźć w starym obozie. Przejdź przez główną bramę, i skręć w lewo za domem Diego.";

  const main = document.createElement("div");
  main.classList.add("main");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  wrapper.appendChild(image);
  wrapper.appendChild(description);
  main.appendChild(wrapper);
  const pageContent = document.querySelector(".page-content");
  pageContent.innerHTML = "";
  pageContent.appendChild(main);
}

export default load;
