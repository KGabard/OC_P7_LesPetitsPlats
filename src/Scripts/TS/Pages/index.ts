import { initSearchFilters } from '../Components/search-filters.js'
import { displaySelectedTags } from '../Components/tag-list.js'
import { displayRecipeCards } from '../Layouts/recipes-gallery.js'
import { RecipesList } from '../Models/recipes-list.js'

export const recipesList = new RecipesList()

const initIndexPage = () => {
  initSearchFilters()
  displaySelectedTags()
  displayRecipeCards()
}

initIndexPage()
