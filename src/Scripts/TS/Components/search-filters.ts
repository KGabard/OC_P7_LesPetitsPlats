import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js'

//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll(
  '.search-filter'
)! as NodeListOf<HTMLDivElement>

//----------
// Functions
//----------
const focusFilter = (filterElmt: HTMLDivElement, target: HTMLElement) => {
  const currentChevronElmt = filterElmt.querySelector(
    '.search-filter__chevron-icon'
  )! as HTMLElement

  if (target === currentChevronElmt) {
    elmtIsActive(filterElmt) ? closeElmt(filterElmt) : openElmt(filterElmt)
  } else {
    openElmt(filterElmt)
  }
}

//---------------
// EventListeners
//---------------
export const handleSearchFilters = () => {
  // FilterEmlts.forEach((filterElmt) => {
  //   filterElmt.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     const target = e.target as HTMLElement
  //     focusFilter(filterElmt, target)
  //   })
  // })
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const targetFilterElmt = target.closest('.search-filter')! as HTMLDivElement
    if (targetFilterElmt) {
      filterEmlts.forEach((filterElmt) => {
        if (filterElmt !== targetFilterElmt) closeElmt(filterElmt)
      })
      e.preventDefault()
      focusFilter(targetFilterElmt, target)
    } else {
      filterEmlts.forEach((filterElmt) => {
        closeElmt(filterElmt)
      })
    }
  })
  
}
