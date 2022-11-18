import { displaySelectedTags } from '../Components/tag-list.js';
import { selectedTagsList } from '../Pages/index.js';
export class FilterTag {
    constructor(tag) {
        this._tag = tag;
    }
    _addSelectEvent(tagElmt) {
        tagElmt.addEventListener('click', () => {
            selectedTagsList.addTag(this._tag);
            displaySelectedTags();
        });
    }
    get tagElmt() {
        const tagElmt = document.createElement('li');
        tagElmt.classList.add('search-filter__list__item');
        tagElmt.setAttribute('data-id', this._tag.id);
        tagElmt.innerHTML = this._tag.label;
        this._addSelectEvent(tagElmt);
        return tagElmt;
    }
}
