import { appliancesList, recipesList, 
// ingredientsList,
utensilsList, } from '../Pages/index.js';
import { FilterButton } from '../Templates/filter-button.js';
//-------------
// DOM Elements
//-------------
const filtersContainer = document.querySelector('.search-filters-container');
//----------
// Functions
//----------
const ingredientsFilterButton = new FilterButton('ingredient');
const appliancesFilterButton = new FilterButton('appliance');
const utensilsFilterButton = new FilterButton('utensil');
const filterButtons = [
    ingredientsFilterButton,
    appliancesFilterButton,
    utensilsFilterButton,
];
filterButtons.forEach((button) => {
    filtersContainer.appendChild(button.buttonElmt);
});
export const initSearchFilters = () => {
    ingredientsFilterButton.updateTagList(recipesList.ingredientsList.list);
    appliancesFilterButton.updateTagList(appliancesList.list);
    utensilsFilterButton.updateTagList(utensilsList.list);
    searchFilterEvents();
};
//---------------
// EventListeners
//---------------
export const searchFilterEvents = () => {
    document.addEventListener('click', (e) => {
        const target = e.target;
        const targetFilterElmt = target.closest('.search-filter');
        if (targetFilterElmt) {
            filterButtons.forEach((button) => {
                if (button.buttonElmt !== targetFilterElmt)
                    button.closeButton();
            });
            e.preventDefault();
            filterButtons.forEach((button) => {
                if (button.buttonElmt === targetFilterElmt) {
                    button.openButton(target);
                }
            });
        }
        else {
            filterButtons.forEach((button) => {
                button.closeButton();
            });
        }
    });
};
