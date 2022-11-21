import { displaySelectedTags } from '../Components/tag-list.js';
import { recipesList } from '../Pages/index.js';
export class SelectedTag {
    constructor(tag) {
        this._tag = tag;
        this._tagElmt = this._createTagElmt();
    }
    get tagElmt() {
        return this._tagElmt;
    }
    _addDeleteEvent(tagElmt) {
        const deleteIcon = tagElmt.querySelector('.tag-list__item__delete-icon');
        deleteIcon.addEventListener('click', () => {
            recipesList.selectedTagsList.removeTag(this._tag.id);
            displaySelectedTags();
        });
    }
    _createTagElmt() {
        const tagBaseClass = 'tag-list__item';
        let tagTypeClass = '';
        switch (this._tag.type) {
            case 'ingredient':
                tagTypeClass = tagBaseClass + '--ingredient';
                break;
            case 'appliance':
                tagTypeClass = tagBaseClass + '--appliance';
                break;
            case 'utensil':
                tagTypeClass = tagBaseClass + '--utensil';
                break;
            default:
                break;
        }
        const tagElmt = document.createElement('li');
        tagElmt.classList.add(tagBaseClass);
        tagElmt.classList.add(tagTypeClass);
        tagElmt.setAttribute('data-id', this._tag.id);
        tagElmt.innerHTML = `
      <p class="tag-list__item__label">${this._tag.label}</p>
      <i class="tag-list__item__delete-icon fa-regular fa-circle-xmark"></i>`;
        this._addDeleteEvent(tagElmt);
        return tagElmt;
    }
}
