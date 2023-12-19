import Logo from '../images/logo_restaurant_white.png';
import Logo2 from '../images/logo_restaurant.png';
import '../styles/header.css';

const createHeader = () => {
    const header = document.createElement('header');
    const divElement = document.createElement('div');
    const ulList = document.createElement('ul');
    const logoImage = new Image();
    const logoDiv = divElement.cloneNode();
    const navDiv = divElement.cloneNode();
    const home = document.createElement('li');
    const contact = document.createElement('li');
    const menu = document.createElement('li');

    logoDiv.id = 'logo-container';
    logoImage.src = Logo;
    logoDiv.appendChild(logoImage);
    
    home.id = 'home-link'
    home.classList.add('links');
    home.innerHTML = 'Home';

    menu.id = 'menu-link';
    menu.classList.add('links');
    menu.innerHTML = 'Menu';

    contact.id = 'contact-link';
    contact.classList.add('links');
    contact.innerHTML = 'Contact';

    ulList.appendChild(home);
    ulList.appendChild(menu);
    ulList.appendChild(contact);

    navDiv.id = 'nav-container';
    navDiv.appendChild(ulList);

    header.appendChild(logoDiv);
    header.appendChild(navDiv);
    header.classList.add('top-nav');

    return header;
};

export default createHeader;