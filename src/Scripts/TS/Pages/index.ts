import {
  displayListItems,
  handleSearchFilters,
} from '../Components/search-filters.js'
import { displayTagList } from '../Components/tag-list.js'
import type { TagType } from '../Types/types.js'
export const ingredientsArray: string[] = []
export const devicesArray: string[] = []
export const utensilsArray: string[] = []
export let tagsArray: TagType[] = [
  { label: 'Test1', type: 'ingredient' },
  { label: 'Test2', type: 'device' },
  { label: 'Test3', type: 'utensil' },
  { label: 'Blabla', type: 'utensil' },
]

for (let index = 0; index < 50; index++) {
  ingredientsArray.push(`Ingrédient${index}`)
  devicesArray.push(`Appareil${index}`)
  utensilsArray.push(`Ustensile${index}`)
}

export const removeTag = (tagElmt: HTMLLIElement) => {
  const labelElmt = tagElmt.querySelector(
    '.tag-list__item__label'
  )! as HTMLParagraphElement
  const label = labelElmt.innerText

  tagsArray = tagsArray.filter((tag) => tag.label !== label)
}

const initIndexPage = () => {
  handleSearchFilters()
  displayListItems()
  displayTagList()
}

initIndexPage()
