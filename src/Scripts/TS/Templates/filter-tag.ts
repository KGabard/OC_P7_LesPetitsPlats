import { updateFilterButtonsTagLists } from '../Components/search-filters.js'
import { displaySelectedTags } from '../Components/tag-list.js'
import { displayRecipeCards } from '../Layouts/recipes-gallery.js'
import type { Tag } from '../Models/tag.js'
import { recipesList } from '../Pages/index.js'

export class FilterTag {
  private readonly _tag: Tag
  private readonly _tagElmt: HTMLLIElement

  constructor(tag: Tag) {
    this._tag = tag
    this._tagElmt = this._createTagElmt()
  }

  get tagElmt() {
    return this._tagElmt
  }

  private _addSelectEvent(tagElmt: HTMLLIElement) {
    tagElmt.addEventListener('click', () => {
      recipesList.selectedTagsList.addTag(this._tag)
      displaySelectedTags()

      recipesList.filterListBySelectedTags()

      displayRecipeCards()
      updateFilterButtonsTagLists()
    })
  }

  private _createTagElmt() {
    const tagElmt = document.createElement('li')
    tagElmt.classList.add('search-filter__list__item')
    tagElmt.setAttribute('data-id', this._tag.id)
    tagElmt.innerHTML = this._tag.label
    this._addSelectEvent(tagElmt)
    return tagElmt
  }
}
