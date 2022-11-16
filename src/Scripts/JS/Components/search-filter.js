import { closeElmt, openElmt } from '../Utils/html-functions';
//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll('.search-filter');
//----------
// Functions
//----------
const focusFilter = (filterElmt) => {
    const currentLabelElmt = filterElmt.querySelector('.search-filter__label');
    const currentInputElmt = filterElmt.querySelector('.search-filter__input');
    closeElmt(currentLabelElmt);
    openElmt(currentInputElmt);
};
//---------------
// EventListeners
//---------------
export const handleSearchFilters;
