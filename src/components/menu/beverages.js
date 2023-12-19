import '../../styles/daily-meals.css';

function createNonAlcoholicBeverages() {
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('meal-container');
    beveragesContainer.id = 'beverages';

    const title = document.createElement('p');
    title.innerHTML = 'NON-ALCOHOLIC <b>BEVERAGES<b>';
    title.classList.add('menu-title');
    beveragesContainer.appendChild(title);

    const items = [
        { name: 'Fresh Orange Juice', price: 'R12.99' },
        { name: 'Iced Coffee', price: 'R15.50' },
        { name: 'Lemonade', price: 'R10.99' },
        { name: 'Virgin Mojito', price: 'R14.50' },
        { name: 'Cranberry Spritzer', price: 'R11.99' },
        { name: 'Sparkling Water', price: 'R8.99' },
        { name: 'Hot Chocolate', price: 'R13.99' },
        { name: 'Green Tea', price: 'R9.50' },
        { name: 'Mango Smoothie', price: 'R16.99' },
        { name: 'Iced Tea', price: 'R10.50' },
        { name: 'Coconut Water', price: 'R12.99' },
        { name: 'Soda', price: 'R7.99' }
    ];

    items.forEach(item => {
        const beverage = document.createElement('div');
        beverage.classList.add('meals');

        const beverageDetails = document.createElement('div');
        beverageDetails.classList.add('meal-details');

        const beverageName = document.createElement('p');
        beverageName.textContent = item.name;

        if (item.name === 'Iced Tea' || item.name === 'Coconut Water')
            beverage.classList.add('add-border');
        
        const ingredients = document.createElement('div');
        ingredients.appendChild(beverageName);
        ingredients.classList.add('ingredients2');
        beverageDetails.appendChild(ingredients);

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = item.price;
        priceParagraph.classList.add('meal-price');
       
        beverage.appendChild(beverageDetails);
        beverage.appendChild(priceParagraph);

        beveragesContainer.appendChild(beverage);
    });

    return beveragesContainer;
}

export default createNonAlcoholicBeverages;
