import {
  devicesArray,
  ingredientsArray,
  utensilsArray,
} from '../Pages/index.js'
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js'

//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll(
  '.search-filter'
)! as NodeListOf<HTMLDivElement>
const listElmts = document.querySelectorAll(
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

const addItemToList = (list: HTMLUListElement, currentArray: string[]) => {
  currentArray.forEach((item) => {
    const itemElmt = document.createElement('li')
    itemElmt.classList.add('search-filter__list__item')
    itemElmt.innerHTML = item
    list.appendChild(itemElmt)
  })
}

export const displayListItems = () => {
  listElmts.forEach((list) => {
    list.innerHTML = ''
    if (list.classList.contains(`${list.classList[0]}--ingredient`))
      addItemToList(list, ingredientsArray)
    if (list.classList.contains(`${list.classList[0]}--device`))
      addItemToList(list, devicesArray)
    if (list.classList.contains(`${list.classList[0]}--utensil`))
      addItemToList(list, utensilsArray)
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
