import { devicesArray, ingredientsArray, utensilsArray, } from '../Pages/index.js';
import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js';
//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll('.search-filter');
const listElmts = document.querySelectorAll('.search-filter__list');
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
const addItemToList = (list, currentArray) => {
    currentArray.forEach((item) => {
        const itemElmt = document.createElement('li');
        itemElmt.classList.add('search-filter__list__item');
        itemElmt.innerHTML = item;
        list.appendChild(itemElmt);
    });
};
export const displayListItems = () => {
    listElmts.forEach((list) => {
        list.innerHTML = '';
        if (list.classList.contains(`${list.classList[0]}--ingredient`))
            addItemToList(list, ingredientsArray);
        if (list.classList.contains(`${list.classList[0]}--device`))
            addItemToList(list, devicesArray);
        if (list.classList.contains(`${list.classList[0]}--utensil`))
            addItemToList(list, utensilsArray);
    });
};
//---------------
// EventListeners
//---------------
export const handleSearchFilters = () => {
    // FilterEmlts.forEach((filterElmt) => {
    //   filterElmt.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     const target = e.target as HTMLElement
    //     focusFilter(filterElmt, target)
    //   })
    // })
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
