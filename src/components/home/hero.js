
const createHeroImage = () => {
    const divElement = document.createElement('div');
    const headerContainer = divElement.cloneNode();
    const titleDiv = divElement.cloneNode();
    const p = document.createElement('p');
    const b = document.createElement('b');
    const welcomeMessage = p.cloneNode();

    b.innerHTML = 'WOWW RESTAURANT'
    welcomeMessage.innerHTML ='WELCOME TO ';
    welcomeMessage.appendChild(b);
    welcomeMessage.id = 'welcome-message';
    p.innerHTML = 'The best gourmet restaurant in South Africa';

    titleDiv.appendChild(welcomeMessage);
    titleDiv.appendChild(p);
    titleDiv.id = 'title-div';
    
    headerContainer.classList.add('header-container');
    headerContainer.appendChild(titleDiv);

    return headerContainer;
};

export default createHeroImage;