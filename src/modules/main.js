import "./style.less";

/**
 * Create <main>
 */
const mainElement = document.createElement("main");
mainElement.className = "app-main";
// heading
const heading = document.createElement("h1");
heading.innerHTML = `<span class="desc">Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
 and an optimized production build.</span>`;
mainElement.appendChild(heading);
// Test a background image url in CSS
const imageBackground = document.createElement("span");
imageBackground.classList.add("image");
mainElement.appendChild(imageBackground);
// Test a public folder asset
const imagePublic = document.createElement("img");
imagePublic.src = "/assets/example.png";
imagePublic.setAttribute("alt", "example");
mainElement.appendChild(imagePublic);

export default mainElement;
