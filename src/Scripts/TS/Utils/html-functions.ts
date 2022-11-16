export const elmtIsActive = (elmt: HTMLElement) =>
  elmt.classList.contains(elmt.classList[0] + '--active')

// Function that removes 'main-class--active' class
export const closeElmt = (elmt: HTMLElement) => {
  elmt.classList.remove(`${elmt.classList[0]}--active`)
}

// Function that adds 'main-class--active' class
export const openElmt = (elmt: HTMLElement) => {
  elmt.classList.add(`${elmt.classList[0]}--active`)
}
