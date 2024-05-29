import './contact.css';
import './style.css';

import { midPageCTA } from './home.js';

const createContactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = 'Contact Us';
    contactPage.appendChild(h2);

    const contacts = [
        { name: 'Li Wei', jobTitle: 'Manager', email: 'liwei@example.com', phone: '123-456-7890' },
        { name: 'Zhang Xin', jobTitle: 'Head Chef', email: 'zhangxin@example.com', phone: '987-654-3210' },
        { name: 'Wang Lin', jobTitle: 'Marketing Director', email: 'wanglin@example.com', phone: '555-123-4567' },
        // Add more contacts as needed
    ];

    const contactList = document.createElement('ul');
    contactList.classList.add('contact-list');

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.classList.add('contact-item');

        const name = document.createElement('p');
        name.innerText = `Name: ${contact.name}`;
        listItem.appendChild(name);

        const jobTitle = document.createElement('p');
        jobTitle.innerText = `Job Title: ${contact.jobTitle}`;
        listItem.appendChild(jobTitle);

        const email = document.createElement('p');
        email.innerText = `Email: ${contact.email}`;
        listItem.appendChild(email);

        const phone = document.createElement('p');
        phone.innerText = `Phone: ${contact.phone}`;
        listItem.appendChild(phone);

        contactList.appendChild(listItem);
    });

    contactPage.appendChild(contactList);
    
    return contactPage;
};


export { createContactPage };

const contactPage = createContactPage();
contactPage.appendChild(midPageCTA());
export { contactPage };