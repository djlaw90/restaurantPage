const contactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = 'Contact:';
    contactPage.appendChild(h2);
    
    return contactPage;
}

export { contactPage }