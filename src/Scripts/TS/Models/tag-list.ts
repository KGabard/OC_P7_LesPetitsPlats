import { normalizeString } from '../Utils/js-functions.js'
import type { Tag } from './tag.js'

export class TagList {
  private _list: Tag[]

  constructor() {
    this._list = []
  }

  get list() {
    return this._list
  }

  addTag(newTag: Tag) {
    let tagAlreadyExist = false
    this._list.forEach((tag) => {
      if (tag.id === newTag.id) tagAlreadyExist = true
    })
    if (!tagAlreadyExist) this._list.push(newTag)
  }

  removeTag(targetId: string) {
    this._list = this._list.filter((tag) => tag.id !== targetId)
  }

  emptyList() {
    this._list.length = 0
  }

  sortByTagLabel() {
    const tagLabelsComparator: (a: Tag, b: Tag) => number = (a, b) =>
      a.label.localeCompare(b.label)
    this._list.sort(tagLabelsComparator)

    // Algo2 : use of native loops
    for (let i = 1; i < this._list.length; i++) {
      for (let j = 0; j < i; j++) {
        if (tagLabelsComparator(this._list[i], this._list[j]) < 0) {
          const tempTag = this._list[i]
          this._list[i] = this._list[j]
          this._list[j] = tempTag
        }
      }
    }
  }

  addTagList(newTagList: TagList) {
    // Algo2 : use of native loops
    for (const tag of newTagList.list) {
      this.addTag(tag)
    }
  }

  replaceTagList(newTagList: TagList) {
    this.emptyList()
    this.addTagList(newTagList)
  }

  filterList(filter: string) {
    const normalizedFilter = normalizeString(filter)
    this._list = this._list.filter((tag) => tag.id.includes(normalizedFilter))
  }

  includesTag(targetTag: Tag) {
    if (!this._list.find((tag) => tag.id === targetTag.id)) return false
    return true
  }
}
