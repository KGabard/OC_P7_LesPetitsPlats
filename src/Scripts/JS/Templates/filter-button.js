import { FilterTag } from './filter-tag.js';
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js';
import { TagList } from '../Models/tag-list.js';
export class FilterButton {
    constructor(type) {
        this._tagList = new TagList();
        this._filteredTaglist = new TagList();
        this._type = type;
        this._buttonElmt = this._createButtonElmt();
        this._handleInputEvent();
    }
    get buttonElmt() {
        return this._buttonElmt;
    }
    openButton(clickTarget) {
        if (clickTarget === this._chevronElmt) {
            elmtIsActive(this._buttonElmt)
                ? this.closeButton()
                : openElmt(this._buttonElmt);
        }
        else {
            openElmt(this._buttonElmt);
        }
    }
    closeButton() {
        this._inputElmt.value = '';
        this._filteredTaglist.replaceTagList(this._tagList);
        this._displayTagList();
        closeElmt(this._buttonElmt);
    }
    resetTagList(newTagList) {
        this._tagList.replaceTagList(newTagList);
        this._filteredTaglist.replaceTagList(this._tagList);
        this._displayTagList();
    }
    _displayTagList() {
        this._listElmt.innerHTML = '';
        this._filteredTaglist.list.forEach((tag) => {
            this._listElmt.appendChild(new FilterTag(tag).tagElmt);
        });
    }
    get _listElmt() {
        return this._buttonElmt.querySelector('.search-filter__list');
    }
    get _chevronElmt() {
        return this._buttonElmt.querySelector('.search-filter__chevron-icon');
    }
    get _inputElmt() {
        return this._buttonElmt.querySelector('.search-filter__input');
    }
    _handleInputEvent() {
        this._inputElmt.addEventListener('input', () => {
            this._filteredTaglist.replaceTagList(this._tagList);
            this._filteredTaglist.filterList(this._inputElmt.value);
            this._displayTagList();
        });
    }
    _createButtonElmt() {
        const buttonClass = 'search-filter';
        let label = '';
        let typeClass = '';
        switch (this._type) {
            case 'ingredient':
                label = 'Ingrédients';
                typeClass = buttonClass + '--ingredient';
                break;
            case 'appliance':
                label = 'Appareils';
                typeClass = buttonClass + '--appliance';
                break;
            case 'utensil':
                label = 'Ustensiles';
                typeClass = buttonClass + '--utensil';
                break;
            default:
                break;
        }
        const buttonElmt = document.createElement('div');
        buttonElmt.classList.add(buttonClass, typeClass);
        buttonElmt.innerHTML = `
      <label class="search-filter__label search-filter__label--active" for="search-filter__input">${label}</label>
      <input type="text" class="search-filter__input" id="search-filter__input" placeholder="Rechercher un ingrédient" autocomplete="off">
      <i class="search-filter__chevron-icon fa-solid fa-chevron-down"></i>
      <ul class="search-filter__list"></ul>
    `;
        return buttonElmt;
    }
}
