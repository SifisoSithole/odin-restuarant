import createHeroImage from './hero';
import createDailyMenu from './daily-meals';
import createBreakfastMenu from './brakefast-meals';
import createLunchMenu from './lunch-meals';
import createWineSelection from './wine-selection'
import createNonAlcoholicBeverages from './beverages';

function createMenuPage(){
    const menuPage = document.createElement('div');

    menuPage.appendChild(createHeroImage());
    menuPage.appendChild(createDailyMenu());
    menuPage.appendChild(createBreakfastMenu());
    menuPage.appendChild(createLunchMenu());
    menuPage.appendChild(createWineSelection());
    menuPage.appendChild(createNonAlcoholicBeverages());

    return menuPage;
}

export default createMenuPage;