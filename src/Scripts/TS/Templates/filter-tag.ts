import type { Tag } from '../Models/tag'

export class FilterTag {
  _tag: Tag

  constructor(tag: Tag) {
    this._tag = tag
  }

  get tagElmt() {
    const tagElmt = Object.assign(document.createElement('li'), {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      innerHTML: this._tag.label,
      className: 'search-filter__list__item',
    })
    tagElmt.setAttribute('data-id', this._tag.id)
    return tagElmt
  }
}
