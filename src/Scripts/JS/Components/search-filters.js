import { appliancesList, ingredientsList, utensilsList, } from '../Pages/index.js';
import { FilterTag } from '../Templates/filter-tag.js';
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js';
//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll('.search-filter');
const filterListElmts = document.querySelectorAll('.search-filter__list');
//----------
// Functions
//----------
const focusFilterElmt = (filterElmt, target) => {
    const currentChevronElmt = filterElmt.querySelector('.search-filter__chevron-icon');
    if (target === currentChevronElmt) {
        elmtIsActive(filterElmt)
            ? closeFilterElmt(filterElmt)
            : openElmt(filterElmt);
    }
    else {
        openElmt(filterElmt);
    }
};
const closeFilterElmt = (filterElmt) => {
    const inputElmt = filterElmt.querySelector('.search-filter__input');
    inputElmt.value = '';
    closeElmt(filterElmt);
};
const addItemToList = (list, currentList) => {
    currentList.list.forEach((tag) => {
        list.appendChild(new FilterTag(tag).tagElmt);
    });
};
export const displayListItems = () => {
    filterListElmts.forEach((list) => {
        list.innerHTML = '';
        if (list.classList.contains(`${list.classList[0]}--ingredient`))
            addItemToList(list, ingredientsList);
        if (list.classList.contains(`${list.classList[0]}--appliance`))
            addItemToList(list, appliancesList);
        if (list.classList.contains(`${list.classList[0]}--utensil`))
            addItemToList(list, utensilsList);
    });
};
//---------------
// EventListeners
//---------------
export const handleSearchFilters = () => {
    document.addEventListener('click', (e) => {
        const target = e.target;
        const targetFilterElmt = target.closest('.search-filter');
        if (targetFilterElmt) {
            filterEmlts.forEach((filterElmt) => {
                if (filterElmt !== targetFilterElmt)
                    closeFilterElmt(filterElmt);
            });
            e.preventDefault();
            focusFilterElmt(targetFilterElmt, target);
        }
        else {
            filterEmlts.forEach((filterElmt) => {
                closeFilterElmt(filterElmt);
            });
        }
    });
};
