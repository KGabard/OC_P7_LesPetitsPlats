import { displayRecipeCards } from '../Layouts/recipes-gallery.js'
import { recipesList } from '../Pages/index.js'
import { normalizeString } from '../Utils/js-functions.js'
import { updateFilterButtonsTagLists } from './search-filters.js'

export class SearchInput {
  static instance: SearchInput

  static instantiate() {
    if (!SearchInput.instance) {
      SearchInput.instance = new SearchInput()
    }

    return SearchInput.instance
  }

  private readonly _inputElmt: HTMLInputElement
  private _previousKeyword: string

  private constructor() {
    this._inputElmt = document.querySelector(
      '.search-input__input'
    )! as HTMLInputElement
    this._addInputListener()
    this._previousKeyword = ''
  }

  get keyword() {
    return normalizeString(this._inputElmt.value)
  }

  private _isPreviousKeywordStillIncluded() {
    if (this.keyword.startsWith(normalizeString(this._previousKeyword))) {
      this._previousKeyword = this.keyword
      return true
    }

    return false
  }

  private _addInputListener() {
    this._inputElmt.addEventListener('input', () => {
      if (this._isPreviousKeywordStillIncluded()) {
        if (this.keyword.length < 3) return

        recipesList.filterListByKeyword(this.keyword)

        displayRecipeCards()
        updateFilterButtonsTagLists()
      } else {
        recipesList.resetFilteredList()
        recipesList.filterListBySelectedTags()

        if (this.keyword.length >= 3)
          recipesList.filterListByKeyword(this.keyword)

        displayRecipeCards()
        updateFilterButtonsTagLists()
      }
    })
  }
}

;`
//-------------
// DOM Elements
//-------------
const searchInputEmlt = document.querySelector(
  '.search-input__input'
)! as HTMLInputElement

//----------
// Functions
//----------
let previousSearch = ''

const previousSearchStillIncluded = () => {
  const currentInput = normalizeString(searchInputEmlt.value)
  let isStillIncluded = false
  isStillIncluded = currentInput.startsWith(normalizeString(previousSearch))
  previousSearch = currentInput
  return isStillIncluded
}

//----------------
// Event Listeners
//----------------
export const handleSearchInput = () => {
  searchInputEmlt.addEventListener('input', () => {
    let currentInput = searchInputEmlt.value
    if (currentInput.length < 3) currentInput = ''

    if (!previousSearchStillIncluded()) {
      recipesList.resetFilteredList()
      recipesList.filterListByTags()
    }

    recipesList.filterListByKeyword(currentInput)
    displayRecipeCards()
    resetFilterButtonsTagList()
  })
}
`
