import { recipesList } from '../Pages/index.js';
import { RecipeCard } from '../Templates/recipe-card.js';
//-------------
// DOM Elements
//-------------
const recipesGalleryEmlt = document.querySelector('.recipes-gallery');
//----------
// Functions
//----------
export const displayRecipeCards = () => {
    recipesGalleryEmlt.innerHTML = '';
    recipesList.filteredList.forEach((recipe) => {
        recipesGalleryEmlt.appendChild(new RecipeCard(recipe).cardElmt);
    });
};
