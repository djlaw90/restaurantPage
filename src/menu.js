
const menuPage = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    const h2 = document.createElement('h2');
    h2.innerText = 'Menu:';
    menuPage.appendChild(h2);
    
    return menuPage;
}

export { menuPage }