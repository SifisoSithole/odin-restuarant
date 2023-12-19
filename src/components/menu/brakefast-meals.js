import '../../styles/daily-meals.css';

function createBreakfastMenu() {
    const breakfastMenuContainer = document.createElement('div');
    breakfastMenuContainer.classList.add('meal-container');
    breakfastMenuContainer.id = 'breakfast-container';

    const title = document.createElement('p');
    title.innerHTML = 'BREAK<b>FAST<b>';
    title.classList.add('menu-title');
    breakfastMenuContainer.appendChild(title);

    const items = [
        { name: 'Classic Pancakes', ingredients: 'Fluffy pancakes with maple syrup and butter', price: 'R6.99' },
        { name: 'Vegetarian Omelette', ingredients: 'Eggs with tomatoes, spinach, and cheese', price: 'R8.50' },
        { name: 'Belgian Waffles', ingredients: 'Crispy waffles with whipped cream and berries', price: 'R7.99' },
        { name: 'Breakfast Burrito', ingredients: 'Scrambled eggs with sausage, peppers, and tortilla', price: 'R9.50' },
        { name: 'Fruit Parfait', ingredients: 'Yogurt with granola and mixed fruits', price: 'R6.99' },
        { name: 'English Breakfast', ingredients: 'Bacon and eggs with tomatoes on toast', price: 'R10.99' }
    ];

    items.forEach(item => {
        const meal = document.createElement('div');
        meal.classList.add('meals');

        const mealDetails = document.createElement('div');
        mealDetails.classList.add('meal-details');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
    
        const ingredients = document.createElement('div');
        ingredients.appendChild(itemName);
        ingredients.classList.add('ingredients');

        if (item.name === 'Fruit Parfait')
            meal.classList.add('add-border');

        const ingredientsParagraph = document.createElement('p');
        ingredientsParagraph.textContent = item.ingredients;
        ingredients.appendChild(ingredientsParagraph);
        mealDetails.appendChild(ingredients);

        meal.appendChild(mealDetails);

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = item.price;
        priceParagraph.classList.add('meal-price');
        meal.appendChild(priceParagraph);

        breakfastMenuContainer.appendChild(meal);
    });

    return breakfastMenuContainer;
}

export default createBreakfastMenu;
