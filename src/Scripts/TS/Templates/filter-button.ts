import { FilterTag } from './filter-tag.js'
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js'
import type { Tag } from '../Models/tag.js'
import { TagList } from '../Models/tag-list.js'

export class FilterButton {
  private readonly _tagList: TagList
  private readonly _filteredTaglist: TagList
  private readonly _type: 'ingredient' | 'appliance' | 'utensil'
  private readonly _buttonElmt: HTMLDivElement

  constructor(type: 'ingredient' | 'appliance' | 'utensil') {
    this._tagList = new TagList()
    this._filteredTaglist = new TagList()
    this._type = type
    this._buttonElmt = this._createButtonElmt()
    this._handleInputEvent()
  }

  get buttonElmt() {
    return this._buttonElmt
  }

  openButton(clickTarget: HTMLElement) {
    if (clickTarget === this._chevronElmt) {
      elmtIsActive(this._buttonElmt)
        ? this.closeButton()
        : openElmt(this._buttonElmt)
    } else {
      openElmt(this._buttonElmt)
    }
  }

  closeButton() {
    this._inputElmt.value = ''
    this._filteredTaglist.replaceTagList(this._tagList)
    this._displayTagList()
    closeElmt(this._buttonElmt)
  }

  updateTagList(newTagList: TagList) {
    this._tagList.replaceTagList(newTagList)
    this._filteredTaglist.replaceTagList(this._tagList)
    this._displayTagList()
  }

  private _displayTagList() {
    this._listElmt.innerHTML = ''
    this._filteredTaglist.list.forEach((tag) => {
      this._listElmt.appendChild(new FilterTag(tag).tagElmt)
    })
  }

  private get _listElmt() {
    return this._buttonElmt.querySelector(
      '.search-filter__list'
    )! as HTMLUListElement
  }

  private get _chevronElmt() {
    return this._buttonElmt.querySelector(
      '.search-filter__chevron-icon'
    )! as HTMLElement
  }

  private get _inputElmt() {
    return this._buttonElmt.querySelector(
      '.search-filter__input'
    )! as HTMLInputElement
  }

  private _handleInputEvent() {
    this._inputElmt.addEventListener('input', () => {
      this._filteredTaglist.replaceTagList(this._tagList)
      this._filteredTaglist.filterList(this._inputElmt.value)
      this._displayTagList()
    })
  }

  private _createButtonElmt() {
    const buttonClass = 'search-filter'
    let label = ''
    let type = ''
    switch (this._type) {
      case 'ingredient':
        label = 'Ingrédients'
        type = '--ingredient'
        break
      case 'appliance':
        label = 'Appareils'
        type = '--appliance'
        break
      case 'utensil':
        label = 'Ustensiles'
        type = '--utensil'
        break
      default:
        break
    }

    const buttonElmt = document.createElement('div')
    buttonElmt.classList.add(buttonClass, buttonClass + type)

    buttonElmt.innerHTML = `
      <label class="search-filter__label search-filter__label--active" for="search-filter__input${type}">${label}</label>
      <input type="text" class="search-filter__input" id="search-filter__input${type}" placeholder="Rechercher un ingrédient" autocomplete="off">
      <i class="search-filter__chevron-icon fa-solid fa-chevron-down"></i>
      <ul class="search-filter__list"></ul>
    `

    return buttonElmt
  }
}
