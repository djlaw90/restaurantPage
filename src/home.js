import './style.css';
import dragon from '../src/dragon-logo.jpg';

const homePage = document.createElement('div');

const topNav = () => {
    const nav = document.createElement('nav');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
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

    return nav;
};

const homeHeroComponent = () => {
    const heroSection = document.createElement('section');
    const heroInner = document.createElement('div');
    const heroCtaButton = document.createElement('button');

    const h2 = document.createElement('h2');
    const introPara = document.createElement('p');

    heroSection.classList.add('hero');
    heroInner.classList.add('hero-inner');

    h2.innerHTML = "Welcome to Flavortown of the East";

    introPara.innerHTML = "Experience the greatest Chinese cuisine central Illinois has to offer.";

    heroCtaButton.innerHTML = "Order online now";
    heroCtaButton.classList.add('btn');
    heroCtaButton.classList.add('button-24');

    heroSection.appendChild(heroInner);

    heroInner.appendChild(h2);
    heroInner.appendChild(introPara);
    heroInner.appendChild(heroCtaButton);

    return heroSection;
};

const homeMainContent = () => {
    const main = document.createElement('main');
    const h2Main = document.createElement('h2');
    h2Main.classList.add('specialties');
    const specialitySection = document.createElement('section');
    specialitySection.classList.add('specialty-section');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const card1 = document.createElement('div');
    const card1Icon = document.createElement('img');

    const card2 = document.createElement('div');
    const card2Icon = document.createElement('img');

    const card3 = document.createElement('div');
    const card3Icon = document.createElement('img');

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    specialitySection.appendChild(h2Main);
    main.appendChild(specialitySection);

    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);
    specialitySection.appendChild(cardContainer);

    card1.appendChild(card1Icon);
    card1.appendChild(para1);
    card1.classList.add('card');
    card2.appendChild(card2Icon);
    card2.appendChild(para2);
    card2.classList.add('card');
    card3.appendChild(card3Icon);
    card3.appendChild(para3);
    card3.classList.add('card');

    card1Icon.src = "../src/heartred.png";
    card2Icon.src = "../src/full.png";
    card3Icon.src = "../src/flavor.png";

    h2Main.innerText = "Our Specialties";

    para1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh molestie, efficitur leo sed, viverra nunc. Donec vehicula accumsan erat facilisis ullamcorper. Donec commodo quis dui nec placerat. Donec mi orci, scelerisque eget nisl ac, hendrerit condimentum odio. Nam dictum odio eget quam tempus, a mattis odio ornare. Nullam auctor libero ut libero suscipit, ut accumsan nunc condimentum. Donec ullamcorper maximus sapien quis egestas.';
    para2.innerHTML = 'Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ultrices enim sit amet elit tincidunt maximus. Suspendisse vitae pellentesque lectus. Duis commodo leo suscipit augue mollis, non venenatis dolor ullamcorper. Duis tincidunt scelerisque lacus, vel vehicula leo consectetur vel. Duis posuere nisl non odio consequat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    para3.innerHTML = 'Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus ornare, id bibendum velit consequat. Fusce posuere risus sollicitudin condimentum ultrices. Fusce gravida, purus eget laoreet mattis, velit sapien ultrices diam, id dapibus erat leo id quam. Maecenas quis risus convallis, placerat elit non, iaculis tortor. Nullam porttitor magna risus, quis bibendum metus tincidunt in. Etiam vel ligula ac risus mattis tincidunt vel sit amet ante. Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.';

    main.appendChild(specialitySection);

    return main;
};

const midPageCTA = () => {
    const midPageSection = document.createElement('div');
    midPageSection.classList.add('mid-page-section');

    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    const orderOnlineH2 = document.createElement('h2');
    orderOnlineH2.classList.add('order-now-section-heading');

    const ctaButton = document.createElement('button');
    const para1 = document.createElement('p');

    orderCard.append(orderOnlineH2);
    orderCard.append(para1);
    orderCard.append(ctaButton);

    para1.innerHTML = 'Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.';

    ctaButton.innerHTML = "Order online now";
    ctaButton.classList.add('btn');
    ctaButton.classList.add('button-24');

    orderOnlineH2.innerText = 'Order Online Now';
    midPageSection.append(orderCard);
    midPageSection.classList.add('mid-page-cta-img');

    return midPageSection;
};

const homeFooter = () => {
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

homePage.appendChild(topNav());
homePage.appendChild(homeHeroComponent());
homePage.appendChild(homeMainContent());
homePage.appendChild(midPageCTA());
homePage.appendChild(homeFooter());

export { homePage }