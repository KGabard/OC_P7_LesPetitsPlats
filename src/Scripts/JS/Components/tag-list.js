import { recipesList } from '../Pages/index.js';
import { SelectedTag } from '../Templates/selected-tag.js';
//-------------
// DOM Elements
//-------------
const taglistEmlt = document.querySelector('.tag-list');
//----------
// Functions
//----------
export const displaySelectedTags = () => {
    taglistEmlt.innerHTML = '';
    recipesList.selectedTagsList.list.forEach((tag) => {
        taglistEmlt.appendChild(new SelectedTag(tag).tagElmt);
    });
};
