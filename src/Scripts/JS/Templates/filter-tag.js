import { updateFilterButtonsTagLists } from '../Components/search-filters.js';
import { displaySelectedTags } from '../Components/tag-list.js';
import { displayRecipeCards } from '../Layouts/recipes-gallery.js';
import { recipesList } from '../Pages/index.js';
export class FilterTag {
    constructor(tag) {
        this._tag = tag;
        this._tagElmt = this._createTagElmt();
    }
    get tagElmt() {
        return this._tagElmt;
    }
    _addSelectEvent(tagElmt) {
        tagElmt.addEventListener('click', () => {
            recipesList.selectedTagsList.addTag(this._tag);
            displaySelectedTags();
            recipesList.filterListBySelectedTags();
            displayRecipeCards();
            updateFilterButtonsTagLists();
        });
    }
    _createTagElmt() {
        const tagElmt = document.createElement('li');
        tagElmt.classList.add('search-filter__list__item');
        tagElmt.setAttribute('data-id', this._tag.id);
        tagElmt.innerHTML = this._tag.label;
        this._addSelectEvent(tagElmt);
        return tagElmt;
    }
}
