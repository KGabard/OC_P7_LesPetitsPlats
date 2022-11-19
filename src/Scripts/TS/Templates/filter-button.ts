import { FilterTag } from './filter-tag.js'
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js'
import type { Tag } from '../Models/tag.js'

export class FilterButton {
  _tagList: Tag[]
  _type: 'ingredient' | 'appliance' | 'utensil'
  _buttonElement: HTMLDivElement

  constructor(type: 'ingredient' | 'appliance' | 'utensil') {
    this._tagList = []
    this._type = type
    this._buttonElement = this._createButtonElmt()
  }

  get buttonElmt() {
    return this._buttonElement
  }

  openButton(clickTarget: HTMLElement) {
    if (clickTarget === this.chevronElmt) {
      elmtIsActive(this.buttonElmt)
        ? this.closeButton()
        : openElmt(this.buttonElmt)
    } else {
      openElmt(this.buttonElmt)
    }
  }

  closeButton() {
    this.inputElmt.value = ''
    closeElmt(this.buttonElmt)
  }

  updateTagList(newTagList: Tag[]) {
    this._tagList = newTagList
    this.displayTagList()
  }

  displayTagList() {
    this.listElmt.innerHTML = ''
    this._tagList.forEach((tag) => {
      this.listElmt.appendChild(new FilterTag(tag).tagElmt)
    })
  }

  get listElmt() {
    return this.buttonElmt.querySelector(
      '.search-filter__list'
    )! as HTMLUListElement
  }

  get chevronElmt() {
    return this.buttonElmt.querySelector(
      '.search-filter__chevron-icon'
    )! as HTMLElement
  }

  get inputElmt() {
    return this.buttonElmt.querySelector(
      '.search-filter__input'
    )! as HTMLInputElement
  }

  _createButtonElmt() {
    const buttonClass = 'search-filter'
    let label = ''
    let typeClass = ''
    switch (this._type) {
      case 'ingredient':
        label = 'Ingrédients'
        typeClass = buttonClass + '--ingredient'
        break
      case 'appliance':
        label = 'Appareils'
        typeClass = buttonClass + '--appliance'
        break
      case 'utensil':
        label = 'Ustensiles'
        typeClass = buttonClass + '--utensil'
        break
      default:
        break
    }

    const buttonElmt = document.createElement('div')
    buttonElmt.classList.add(buttonClass, typeClass)

    buttonElmt.innerHTML = `
      <label class="search-filter__label search-filter__label--active" for="search-filter__input">${label}</label>
      <input type="text" class="search-filter__input" id="search-filter__input" placeholder="Rechercher un ingrédient" autocomplete="off">
      <i class="search-filter__chevron-icon fa-solid fa-chevron-down"></i>
      <ul class="search-filter__list"></ul>
    `

    return buttonElmt
  }
}
