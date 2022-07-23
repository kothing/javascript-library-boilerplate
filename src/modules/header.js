import webpackLogo from "@/images/webpack-logo.svg";

/**
 * Create <header>
 */
const headerElement = document.createElement("header");
headerElement.className = "app-header";
const logo = document.createElement("img");
logo.src = webpackLogo;
logo.setAttribute("alt", "logo");
headerElement.appendChild(logo);

export default headerElement;
