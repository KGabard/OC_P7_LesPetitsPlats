import { displaySelectedTags } from '../Components/tag-list.js'
import type { Tag } from '../Models/tag.js'
import { selectedTagsList } from '../Pages/index.js'

export class FilterTag {
  _tag: Tag

  constructor(tag: Tag) {
    this._tag = tag
  }

  _addSelectEvent(tagElmt: HTMLLIElement) {
    tagElmt.addEventListener('click', () => {
      selectedTagsList.addTag(this._tag)
      displaySelectedTags()
    })
  }

  get tagElmt() {
    const tagElmt = document.createElement('li')
    tagElmt.classList.add('search-filter__list__item')
    tagElmt.setAttribute('data-id', this._tag.id)
    tagElmt.innerHTML = this._tag.label
    this._addSelectEvent(tagElmt)
    return tagElmt
  }
}
