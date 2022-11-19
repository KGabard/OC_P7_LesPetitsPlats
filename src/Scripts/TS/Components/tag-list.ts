import { selectedTagsList } from '../Pages/index.js'
import { SelectedTag } from '../Templates/selected-tag.js'

//-------------
// DOM Elements
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
