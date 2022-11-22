import { recipesList } from '../Pages/index.js'
import { FilterButton } from '../Templates/filter-button.js'

//-------------
// DOM Elements
//-------------
const filtersContainer = document.querySelector(
  '.search-filters-container'
)! as HTMLDivElement

//----------
// Functions
//----------
const ingredientsFilterButton = new FilterButton('ingredient')
const appliancesFilterButton = new FilterButton('appliance')
const utensilsFilterButton = new FilterButton('utensil')
const filterButtons = [
  ingredientsFilterButton,
  appliancesFilterButton,
  utensilsFilterButton,
]

filterButtons.forEach((button) => {
  filtersContainer.appendChild(button.buttonElmt)
})

export const resetFilterButtonsTagList = () => {
  ingredientsFilterButton.resetTagList(recipesList.ingredientsList)
  appliancesFilterButton.resetTagList(recipesList.appliancesList)
  utensilsFilterButton.resetTagList(recipesList.utensilsList)
}

export const initSearchFilters = () => {
  resetFilterButtonsTagList()
  searchFilterEvents()
}

//---------------
// EventListeners
//---------------
export const searchFilterEvents = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const targetFilterElmt = target.closest('.search-filter')! as HTMLDivElement
    if (targetFilterElmt) {
      filterButtons.forEach((button) => {
        if (button.buttonElmt !== targetFilterElmt) button.closeButton()
      })
      e.preventDefault()
      filterButtons.forEach((button) => {
        if (button.buttonElmt === targetFilterElmt) {
          button.openButton(target)
        }
      })
    } else {
      filterButtons.forEach((button) => {
        button.closeButton()
      })
    }
  })
}