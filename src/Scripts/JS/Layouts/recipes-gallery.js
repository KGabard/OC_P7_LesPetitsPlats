import { recipesList } from '../Pages/index.js';
import { RecipeCard } from '../Templates/recipe-card.js';
//-------------
// DOM Elements
//-------------
const recipesGalleryEmlt = document.querySelector('.recipes-gallery');
//----------
// Functions
//----------
const noRecipeElmt = () => {
    const elmt = document.createElement('p');
    elmt.classList.add('recipes-gallery__no-recipe');
    elmt.innerHTML = 'Malheuresement aucune recette ne correspond à vos critères…';
    return elmt;
};
export const displayRecipeCards = () => {
    recipesGalleryEmlt.innerHTML = '';
    if (recipesList.filteredList.length > 0) {
        recipesList.filteredList.forEach((recipe) => {
            recipesGalleryEmlt.appendChild(new RecipeCard(recipe).cardElmt);
        });
    }
    else {
        recipesGalleryEmlt.appendChild(noRecipeElmt());
    }
};
