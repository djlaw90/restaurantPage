import './menu.css';

// Function to create the menu page element
const createMenuPage = () => {
    const menuPageElement = document.createElement('div');
    menuPageElement.classList.add('menu');
    return menuPageElement;
}

const createMenuContent = () => {
    const main = document.createElement('main');
    main.classList.add('menu-main');

    const sections = [
        {
            title: 'Appetizers',
            items: [
                { name: 'Spring Rolls', description: 'Crispy rolls stuffed with veggies', price: '$5.99', image: 'https://via.placeholder.com/150' },
                { name: 'Crab Rangoon', description: 'Crispy wontons filled with cream cheese and crab meat', price: '$6.99', image: 'https://via.placeholder.com/150' },
                { name: 'Potstickers', description: 'Pan-fried dumplings filled with pork and vegetables', price: '$7.99', image: 'https://via.placeholder.com/150' },
            ]
        },
        {
            title: 'Soups',
            items: [
                { name: 'Hot and Sour Soup', description: 'Spicy and tangy soup with tofu and mushrooms', price: '$4.99', image: 'https://via.placeholder.com/150' },
                { name: 'Egg Drop Soup', description: 'Classic Chinese soup with wispy beaten eggs', price: '$3.99', image: 'https://via.placeholder.com/150' },
                { name: 'Wonton Soup', description: 'Clear broth with wonton dumplings and vegetables', price: '$5.99', image: 'https://via.placeholder.com/150' },
                // Add more soups as needed
            ]
        },
        {
            title: 'Entrees',
            items: [
                { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts', price: '$12.99', image: 'https://via.placeholder.com/150' },
                { name: 'Sweet and Sour Pork', description: 'Pork with a tangy sauce', price: '$11.99', image: 'https://via.placeholder.com/150' },
                { name: 'Mongolian Beef', description: 'Tender beef stir-fried with onions and scallions', price: '$14.99', image: 'https://via.placeholder.com/150' },
                // Add more entrees as needed
            ]
        },
        {
            title: 'Desserts',
            items: [
                { name: 'Fortune Cookies', description: 'Crunchy cookies with a hidden message', price: '$2.99', image: 'https://via.placeholder.com/150' },
                { name: 'Almond Cookies', description: 'Sweet almond-flavored cookies', price: '$3.99', image: 'https://via.placeholder.com/150' },
                { name: 'Mango Pudding', description: 'Creamy mango-flavored pudding', price: '$4.99', image: 'https://via.placeholder.com/150' },
                // Add more desserts as needed
            ]
        }
    ];

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.innerText = section.title;
        sectionDiv.appendChild(sectionTitle);

        const itemList = document.createElement('ul');
        itemList.classList.add('menu-list');

        section.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('menu-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;
            listItem.appendChild(itemImage);

            const itemName = document.createElement('h3');
            itemName.innerText = item.name;
            listItem.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.innerText = item.description;
            listItem.appendChild(itemDescription);

            const itemPrice = document.createElement('p');
            itemPrice.innerText = item.price;
            itemPrice.classList.add('menu-price');
            listItem.appendChild(itemPrice);

            itemList.appendChild(listItem);
        });

        sectionDiv.appendChild(itemList);
        main.appendChild(sectionDiv);
    });

    return main;
};


// Create the menu page element
const menuPage = createMenuPage();

// Append the menu content to the menu page element
menuPage.appendChild(createMenuContent());

// Export the menu page element
export { menuPage };
