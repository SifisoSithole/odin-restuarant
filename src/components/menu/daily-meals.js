import burgerImage from '../../images/burger-1030x687.jpg';
import pizzaImage from '../../images/pizza-1030x687.jpg';
import '../../styles/daily-meals.css';

function createMeal(name, imageUrl, ingredients, price) {
    const meal = document.createElement('div');
    meal.classList.add('meals');
    
    const mealDetails = document.createElement('div');
    mealDetails.classList.add('meal-details');

    const mealImage = document.createElement('img');
    mealImage.src = imageUrl;
    mealDetails.appendChild(mealImage);
    
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.classList.add('ingredients');
    ingredients.forEach(ingredient => {
        const ingredientParagraph = document.createElement('p');
        ingredientParagraph.textContent = ingredient;
        ingredientsDiv.appendChild(ingredientParagraph);
    });
    mealDetails.appendChild(ingredientsDiv);
    
    meal.appendChild(mealDetails);
    
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = price;
    meal.appendChild(priceParagraph);

    return meal;
}

function createDailyMenu() {
    const dailyMealsContainer = document.createElement('div');
    dailyMealsContainer.classList.add('meal-container');
    const title = document.createElement('p');
    title.innerHTML = '<b>MENU</b> OF THE DAY';
    title.classList.add('menu-title');
    dailyMealsContainer.appendChild(title);

    const sesameFillet = createMeal(
        'Sesame Crusted Scotch Fillet',
        burgerImage,
        ['Sesame crusted scotch fillet', 'with honeyed Pedro Ximenez sauce and potato cake'],
        'R7.50'
    );
    dailyMealsContainer.appendChild(sesameFillet);

    const lamb = createMeal(
        'Roast Rack of Lamb',
        pizzaImage,
        ['Roast Rack of Lamb', 'with herb crust and fruity mesclun salad and straw potato'],
        'R7.50'
    );
    dailyMealsContainer.appendChild(lamb);

    return dailyMealsContainer;
}

export default createDailyMenu;
