import { recipesList } from '../Pages/index.js'
import { RecipeCard } from '../Templates/recipe-card.js'

//-------------
// DOM Elements
//-------------
const recipesGalleryEmlt = document.querySelector(
  '.recipes-gallery'
)! as HTMLElement

//----------
// Functions
//----------
const noRecipeElmt = () => {
  const elmt = document.createElement('div')
  elmt.classList.add('recipes-gallery__no-recipe-found')
  elmt.innerHTML = `
  <p class="recipes-gallery__no-recipe-found__text">Malheuresement aucune recette ne correspond à vos critères…</p>
  <img class="recipes-gallery__no-recipe-found__image" src="./src/Assets/Images/empty.svg" alt="" aria-hidden="true">`
  return elmt
}

export const displayRecipeCards = () => {
  recipesGalleryEmlt.innerHTML = ''
  if (recipesList.filteredList.length > 0) {
    recipesList.filteredList.forEach((recipe) => {
      recipesGalleryEmlt.appendChild(new RecipeCard(recipe).cardElmt)
    })
  } else {
    recipesGalleryEmlt.appendChild(noRecipeElmt())
  }
}
