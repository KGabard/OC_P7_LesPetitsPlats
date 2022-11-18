//-------------
// DOM Elements

import { selectedTagsList } from '../Pages/index.js'
import { SelectedTag } from '../Templates/selected-tag.js'

//-------------
const taglistEmlt = document.querySelector('.tag-list')! as HTMLUListElement

//----------
// Functions
//----------

export const displaySelectedTags = () => {
  taglistEmlt.innerHTML = ''
  selectedTagsList.list.forEach((tag) => {
    taglistEmlt.appendChild(new SelectedTag(tag).tagElmt)
  })
}

// export const displayTagList = () => {
//   displaySelectedTags()
//   // addTagEventListeners()
// }

//---------------
// EventListeners
//---------------
// const addTagEventListeners = () => {
//   const tagElmts = document.querySelectorAll(
//     '.tag-list__item'
//   )! as NodeListOf<HTMLLIElement>

//   tagElmts.forEach((tagElmt) => {
//     const deleteIconElmt = tagElmt.querySelector(
//       '.tag-list__item__delete-icon'
//     )! as HTMLElement
//     deleteIconElmt.addEventListener('click', () => {
//       removeTag(tagElmt)
//       displayTagList()
//     })
//   })
// }
