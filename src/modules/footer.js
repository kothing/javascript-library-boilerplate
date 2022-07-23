/**
 * Create <footer>
 */
const footerElement = document.createElement("footer");
footerElement.className = "app-footer";
const foot = document.createElement("div");
foot.innerHTML = `<div>webpack-js-library-boilerplate</div>`;
footerElement.appendChild(foot);

export default footerElement;
