//-------------
// DOM Elements

import { recipesList } from '../Pages/index.js'
import { RecipeCard } from '../Templates/recipe-card.js'

//-------------
const recipesGalleryEmlt = document.querySelector(
  '.recipes-gallery'
)! as HTMLElement

//----------
// Functions
//----------
export const displayRecipeCards = () => {
  recipesGalleryEmlt.innerHTML = ''
  recipesList.list.forEach((recipe) => {
    recipesGalleryEmlt.appendChild(new RecipeCard(recipe).cardElmt)
  })
}
