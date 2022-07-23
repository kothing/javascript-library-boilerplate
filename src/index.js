import Header from "./modules/header";
import Main from "./modules/main";
import Footer from "./modules/footer";

// Import of styles
import "@/styles/index.scss";

const app = document.querySelector("#root");
app.append(Header, Main, Footer);
