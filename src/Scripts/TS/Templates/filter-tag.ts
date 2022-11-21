import { displaySelectedTags } from '../Components/tag-list.js'
import type { Tag } from '../Models/tag.js'
import { recipesList } from '../Pages/index.js'

export class FilterTag {
  _tag: Tag
  _tagElmt: HTMLLIElement

  constructor(tag: Tag) {
    this._tag = tag
    this._tagElmt = this._createTagElmt()
  }

  get tagElmt() {
    return this._tagElmt
  }

  _addSelectEvent(tagElmt: HTMLLIElement) {
    tagElmt.addEventListener('click', () => {
      recipesList.selectedTagsList.addTag(this._tag)
      displaySelectedTags()
    })
  }

  _createTagElmt() {
    const tagElmt = document.createElement('li')
    tagElmt.classList.add('search-filter__list__item')
    tagElmt.setAttribute('data-id', this._tag.id)
    tagElmt.innerHTML = this._tag.label
    this._addSelectEvent(tagElmt)
    return tagElmt
  }
}
