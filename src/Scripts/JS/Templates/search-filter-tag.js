export class SearchFilterTag {
    constructor(tag) {
        this._tag = tag;
    }
    get tagElmt() {
        const tagElmt = document.createElement(`
      <li class="search-filter__list__item" value="${this._tag.id}">
        ${this._tag.label}
      </li>
    `);
        return tagElmt;
    }
}
