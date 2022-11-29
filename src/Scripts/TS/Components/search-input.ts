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

    this._previousKeyword = this.keyword
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
