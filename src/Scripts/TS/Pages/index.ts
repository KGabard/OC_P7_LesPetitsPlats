import { initSearchFilters } from '../Components/search-filters.js'
import { displaySelectedTags } from '../Components/tag-list.js'
import { TagList } from '../Models/tag-list.js'
import { Tag } from '../Models/tag.js'

export const ingredientsList = new TagList()
export const appliancesList = new TagList()
export const utensilsList = new TagList()
export const selectedTagsList = new TagList()

selectedTagsList.addTag(new Tag('Test1', 'ingredient'))
selectedTagsList.addTag(new Tag('Test2', 'appliance'))
selectedTagsList.addTag(new Tag('Test3', 'utensil'))
selectedTagsList.addTag(new Tag('BlaBla', 'appliance'))

for (let index = 0; index < 25; index++) {
  ingredientsList.addTag(new Tag(`Ingrédient${index}`, 'ingredient'))
  appliancesList.addTag(new Tag(`Appareil${index}`, 'appliance'))
  utensilsList.addTag(new Tag(`Ustensile${index}`, 'utensil'))
}

const initIndexPage = () => {
  initSearchFilters()
  displaySelectedTags()
}

initIndexPage()
