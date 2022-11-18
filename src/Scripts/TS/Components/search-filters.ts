import type { TagList } from '../Models/tag-list.js'
import {
  appliancesList,
  ingredientsList,
  utensilsList,
} from '../Pages/index.js'
import { FilterTag } from '../Templates/filter-tag.js'
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js'

//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll(
  '.search-filter'
)! as NodeListOf<HTMLDivElement>
const filterListElmts = document.querySelectorAll(
  '.search-filter__list'
)! as NodeListOf<HTMLUListElement>

//----------
// Functions
//----------
const focusFilterElmt = (filterElmt: HTMLDivElement, target: HTMLElement) => {
  const currentChevronElmt = filterElmt.querySelector(
    '.search-filter__chevron-icon'
  )! as HTMLElement

  if (target === currentChevronElmt) {
    elmtIsActive(filterElmt)
      ? closeFilterElmt(filterElmt)
      : openElmt(filterElmt)
  } else {
    openElmt(filterElmt)
  }
}

const closeFilterElmt = (filterElmt: HTMLDivElement) => {
  const inputElmt = filterElmt.querySelector(
    '.search-filter__input'
  )! as HTMLInputElement
  inputElmt.value = ''
  closeElmt(filterElmt)
}

const addItemToList = (list: HTMLUListElement, currentList: TagList) => {
  currentList.list.forEach((tag) => {
    list.appendChild(new FilterTag(tag).tagElmt)
  })
}

export const displayListItems = () => {
  filterListElmts.forEach((list) => {
    list.innerHTML = ''
    if (list.classList.contains(`${list.classList[0]}--ingredient`))
      addItemToList(list, ingredientsList)
    if (list.classList.contains(`${list.classList[0]}--appliance`))
      addItemToList(list, appliancesList)
    if (list.classList.contains(`${list.classList[0]}--utensil`))
      addItemToList(list, utensilsList)
  })
}

//---------------
// EventListeners
//---------------
export const handleSearchFilters = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const targetFilterElmt = target.closest('.search-filter')! as HTMLDivElement
    if (targetFilterElmt) {
      filterEmlts.forEach((filterElmt) => {
        if (filterElmt !== targetFilterElmt) closeFilterElmt(filterElmt)
      })
      e.preventDefault()
      focusFilterElmt(targetFilterElmt, target)
    } else {
      filterEmlts.forEach((filterElmt) => {
        closeFilterElmt(filterElmt)
      })
    }
  })
}
