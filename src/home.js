import './style.css';

const homePage = document.createElement('div');

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

    card1Icon.src = "../src/pexels-catscoming-699544.jpg";
    card2Icon.src = "../src/pexels-catscoming-955137.jpg";
    card3Icon.src = "../src/pexels-xmtnguyen-699953.jpg";

    h2Main.innerText = "Our Specialties";

    para1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh molestie, efficitur leo sed, viverra nunc.';
    para2.innerHTML = 'Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    para3.innerHTML = 'Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus ornare, id bibendum velit consequat.';

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

homePage.appendChild(homeHeroComponent());
homePage.appendChild(homeMainContent());
homePage.appendChild(midPageCTA());

export { homePage, midPageCTA }