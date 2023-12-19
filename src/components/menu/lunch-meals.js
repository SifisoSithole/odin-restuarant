import '../../styles/daily-meals.css';

function createLunchMenu() {
    const lunchMenuContainer = document.createElement('div');
    lunchMenuContainer.classList.add('meal-container');
    lunchMenuContainer.id = 'lunch-container';

    const title = document.createElement('p');
    title.innerHTML = 'LUNCH<b>TIME</b>';
    title.classList.add('menu-title');
    lunchMenuContainer.appendChild(title);

    const items = [
        { name: 'Grilled Chicken Salad', ingredients: 'Grilled chicken with mixed greens, cherry tomatoes, and balsamic vinaigrette', price: 'R12.99' },
        { name: 'Margherita Pizza', ingredients: 'Classic pizza with tomato sauce, fresh mozzarella, and basil', price: 'R10.50' },
        { name: 'Vegetable Stir-Fry', ingredients: 'Assorted vegetables stir-fried with tofu in a savory sauce', price: 'R11.99' },
        { name: 'Penne Alfredo', ingredients: 'Penne pasta with creamy Alfredo sauce and Parmesan cheese', price: 'R9.50' },
        { name: 'Teriyaki Salmon', ingredients: 'Teriyaki-glazed salmon with jasmine rice and steamed broccoli', price: 'R14.99' },
        { name: 'Caprese Sandwich', ingredients: 'Tomato, mozzarella, and basil sandwich with pesto spread', price: 'R8.99' },
        { name: 'Mushroom Risotto', ingredients: 'Creamy mushroom risotto with Parmesan and thyme', price: 'R13.50' },
        { name: 'BBQ Pulled Pork Sandwich', ingredients: 'Slow-cooked pulled pork in BBQ sauce on a bun with coleslaw', price: 'R11.50' }
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

        if (item.name === 'Mushroom Risotto')
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

        lunchMenuContainer.appendChild(meal);
    });

    return lunchMenuContainer;
}

export default createLunchMenu;
