import './style.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';

const content = document.getElementById('content');

content.appendChild(homePage);

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


homeButton.addEventListener("click", () => {
  console.log("home click");
})


