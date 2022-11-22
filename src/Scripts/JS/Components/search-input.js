import { displayRecipeCards } from '../Layouts/recipes-gallery.js';
import { recipesList } from '../Pages/index.js';
import { normalizeString } from '../Utils/js-functions.js';
import { resetFilterButtonsTagList } from './search-filters.js';
//-------------
// DOM Elements
//-------------
const searchInputEmlt = document.querySelector('.search-input__input');
//----------
// Functions
//----------
let previousSearch = '';
const previousSearchStillIncluded = () => {
    const currentInput = normalizeString(searchInputEmlt.value);
    let isStillIncluded = false;
    isStillIncluded = currentInput.startsWith(normalizeString(previousSearch));
    previousSearch = currentInput;
    return isStillIncluded;
};
//----------------
// Event Listeners
//----------------
export const handleSearchInput = () => {
    searchInputEmlt.addEventListener('input', () => {
        let currentInput = searchInputEmlt.value;
        if (currentInput.length < 3)
            currentInput = '';
        if (!previousSearchStillIncluded()) {
            recipesList.resetFilteredList();
        }
        recipesList.filterList(currentInput);
        displayRecipeCards();
        resetFilterButtonsTagList();
    });
};
