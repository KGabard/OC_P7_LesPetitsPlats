import { closeElmt, elmtIsActive, openElmt } from '../Utils/html-functions.js';
//-------------
// DOM Elements
//-------------
const filterEmlts = document.querySelectorAll('.search-filter');
//----------
// Functions
//----------
const focusFilter = (filterElmt, target) => {
    const currentChevronElmt = filterElmt.querySelector('.search-filter__chevron-icon');
    if (target === currentChevronElmt) {
        elmtIsActive(filterElmt) ? closeElmt(filterElmt) : openElmt(filterElmt);
    }
    else {
        openElmt(filterElmt);
    }
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
                    closeElmt(filterElmt);
            });
            e.preventDefault();
            focusFilter(targetFilterElmt, target);
        }
        else {
            filterEmlts.forEach((filterElmt) => {
                closeElmt(filterElmt);
            });
        }
    });
};
