import './style.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import dragon from '../src/dragon-logo.jpg';
import { contactPage } from './contact.js';

const navContainer = document.getElementById('nav-container');
const footerContainer = document.getElementById('footer-container');
const content = document.getElementById('content');

const topNav = () => {
  const nav = document.createElement('nav');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');

  ul.classList.add("nav-buttons");
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  const dragonLogo = new Image();
  dragonLogo.src = dragon;
  dragonLogo.classList.add('dragon-logo');
  nav.appendChild(dragonLogo);

  nav.appendChild(h1);
  h1.innerHTML = "Drunken Dragon Chinese Food";

  nav.appendChild(ul);

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  const homeButton = document.createElement('button');
  homeButton.setAttribute('href', 'index.html');
  homeButton.classList.add("link-button");
  homeButton.id = "home-button";
  home.appendChild(homeButton);

  const menuButton = document.createElement('button');
  menuButton.setAttribute('href', 'menu.html');
  menuButton.classList.add("link-button");
  menuButton.id = "menu-button";
  menu.appendChild(menuButton);

  const contactButton = document.createElement('button');
  contactButton.setAttribute('href', 'contact.html');
  contactButton.classList.add("link-button");
  contactButton.id = "contact-button";
  contact.appendChild(contactButton);

  homeButton.innerHTML = 'Home';
  menuButton.innerHTML = 'Menu';
  contactButton.innerHTML = 'Contact';

  const currentPage = window.location.href;
  if (currentPage.includes("index.html")) {
      homeButton.classList.add('active-page');
  } else if (currentPage.includes("menu.html")) {
      menuButton.classList.add('active-page');
  } else if (currentPage.includes("contact.html")) {
      contactButton.classList.add('active-page');
  }

  return nav;
};

const footer = () => {
  const footer = document.createElement('footer');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const copyrightSection = document.createElement('div');
  const copyrightText = document.createElement('p');

  copyrightSection.appendChild(copyrightText);

  copyrightText.innerHTML = `Copyright <a href="https://dustylawless.com/">Dusty Lawless 2024</a>`;

  footer.classList.add('footer');

  footer.appendChild(para1);
  footer.appendChild(para2);
  footer.appendChild(para3);
  footer.appendChild(copyrightSection);

  para1.innerHTML = `<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;
  para2.innerHTML = `<div>Icons made by <a href="https://www.flaticon.com/authors/iyahicon" title="IYAHICON">IYAHICON</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;
  para3.innerHTML = `<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`;

  return footer;
};

navContainer.appendChild(topNav());
content.appendChild(homePage);
footerContainer.appendChild(footer());


const navButtons = document.querySelectorAll(".link-button");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");


homeButton.addEventListener("click", () => {
  addActiveClass(homeButton);
  content.innerText = '';
  content.appendChild(homePage);
});

menuButton.addEventListener("click", () => {
  addActiveClass(menuButton);
  content.innerText = '';
  content.appendChild(menuPage());
});

contactButton.addEventListener("click", () => {
  addActiveClass(contactButton);
  content.innerText = '';
  content.appendChild(contactPage());
});

function addActiveClass(btn) {
  navButtons.forEach(btn => btn.classList.remove('active-page'));
  btn.classList.add('active-page');
}