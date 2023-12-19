import createHeroImage from './hero'
import createAboutRestuarant from './about-restuarant';
import createKitchenStaff from './kitchen-staff';

function createHomePage(){
    const divElement = document.createElement('div');
    const homePage = divElement.cloneNode();

    homePage.id = 'home-container';
    homePage.appendChild(createHeroImage());
    homePage.appendChild(createAboutRestuarant());
    homePage.appendChild(createKitchenStaff());

    return homePage;
}

export default createHomePage;