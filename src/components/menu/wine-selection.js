import '../../styles/daily-meals.css';
import wineImage from '../../images/wine-845x684.jpg'

function createWineSelection() {
    const wineSelection = document.createElement('div');
    wineSelection.classList.add('meal-container');

    const items = [
        { name: 'Chardonnay', description: 'Full-bodied white wine with notes of citrus and oak', price: 'R45.99' },
        { name: 'Merlot', description: 'Medium-bodied red wine with flavors of black cherry and plum', price: 'R39.50' },
        { name: 'Sauvignon Blanc', description: 'Crisp and refreshing white wine with hints of green apple and grass', price: 'R42.99' },
        { name: 'Cabernet Sauvignon', description: 'Bold red wine with rich flavors of blackcurrant and cedar', price: 'R48.50' },
        { name: 'Pinot Noir', description: 'Light-bodied red wine with notes of cherry and earth', price: 'R44.99' },
        { name: 'Rosé', description: 'Dry and fruity pink wine with hints of strawberry and floral notes', price: 'R36.99' },
        { name: 'Prosecco', description: 'Sparkling white wine with crisp acidity and flavors of green apple and pear', price: 'R49.99' }
    ];

    items.forEach(item => {
        const wine = document.createElement('div');
        wine.classList.add('meals');

        const wineDetails = document.createElement('div');
        wineDetails.classList.add('meal-details');

        const wineName = document.createElement('p');
        wineName.textContent = item.name;
        wineName.classList.add('meal-name');

        const ingredients = document.createElement('div');
        ingredients.appendChild(wineName);
        ingredients.classList.add('ingredients');

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = item.description;
        ingredients.appendChild(descriptionParagraph);
        wineDetails.appendChild(ingredients);

        wine.appendChild(wineDetails);

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = item.price;
        priceParagraph.classList.add('meal-price');
        wine.appendChild(priceParagraph);

        wineSelection.appendChild(wine);
    });

    return wineSelection;
}

function createWineSection(){
    const wineSection = document.createElement('div');
    wineSection.id = 'wine-selection';

    const title = document.createElement('p');
    title.innerHTML = 'WINE <b>SELECTION</b>';
    title.classList.add('menu-title');

    wineSection.appendChild(title);

    const image = document.createElement('img');
    image.src = wineImage;
    wineSection.appendChild(image);

    wineSection.appendChild(createWineSelection());

    return wineSection;
}

export default createWineSection;
