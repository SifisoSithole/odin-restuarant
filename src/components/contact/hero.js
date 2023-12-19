import '../../styles/contact.css';

const createHeroImage = () => {
    const divElement = document.createElement('div');
    const headerContainer = divElement.cloneNode();
    const titleDiv = divElement.cloneNode();
    const p = document.createElement('p');
    const b = document.createElement('b');
    const welcomeMessage = p.cloneNode();

    b.innerHTML = 'CONTACT US'
    welcomeMessage.appendChild(b);
    welcomeMessage.id = 'welcome-message';

    titleDiv.appendChild(welcomeMessage);
    titleDiv.id = 'title-div';
    
    headerContainer.classList.add('header-container');
    headerContainer.id = 'contact-hero';
    headerContainer.appendChild(titleDiv);

    return headerContainer;
};

export default createHeroImage;