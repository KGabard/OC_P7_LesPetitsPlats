import type { Tag } from './tag.js'

export class TagList {
  _list: Tag[]

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
}
