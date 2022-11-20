import { initSearchFilters } from '../Components/search-filters.js'
import { displaySelectedTags } from '../Components/tag-list.js'
import { displayRecipeCards } from '../Layouts/recipes-gallery.js'
import { RecipesList } from '../Models/recipes-list.js'
import { TagList } from '../Models/tag-list.js'
import { Tag } from '../Models/tag.js'

// export const ingredientsList = new TagList()
export const appliancesList = new TagList()
export const utensilsList = new TagList()
export const selectedTagsList = new TagList()
export const recipesList = new RecipesList()

for (let index = 0; index < 25; index++) {
  // ingredientsList.addTag(new Tag(`Ingrédient${index}`, 'ingredient'))
  appliancesList.addTag(new Tag(`Appareil${index}`, 'appliance'))
  utensilsList.addTag(new Tag(`Ustensile${index}`, 'utensil'))
}

const initIndexPage = () => {
  initSearchFilters()
  displaySelectedTags()
  displayRecipeCards()
}

initIndexPage()
