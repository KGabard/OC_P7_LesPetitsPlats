import { removeTag, tagsArray } from '../Pages/index.js';
//-------------
// DOM Elements
//-------------
const taglistEmlt = document.querySelector('.tag-list');
//----------
// Functions
//----------
const addTagToTagList = () => {
    taglistEmlt.innerHTML = '';
    tagsArray.forEach((tag) => {
        const tagElmt = document.createElement('li');
        tagElmt.classList.add('tag-list__item');
        switch (tag.type) {
            case 'ingredient':
                tagElmt.classList.add(`${tagElmt.classList[0]}--ingredient`);
                break;
            case 'device':
                tagElmt.classList.add(`${tagElmt.classList[0]}--device`);
                break;
            case 'utensil':
                tagElmt.classList.add(`${tagElmt.classList[0]}--utensil`);
                break;
            default:
                break;
        }
        tagElmt.innerHTML = `
      <p class="tag-list__item__label">${tag.label}</p>
      <i class="tag-list__item__delete-icon fa-regular fa-circle-xmark"></i>`;
        taglistEmlt.appendChild(tagElmt);
    });
};
export const displayTagList = () => {
    addTagToTagList();
    addTagEventListeners();
};
//---------------
// EventListeners
//---------------
const addTagEventListeners = () => {
    const tagElmts = document.querySelectorAll('.tag-list__item');
    tagElmts.forEach((tagElmt) => {
        const deleteIconElmt = tagElmt.querySelector('.tag-list__item__delete-icon');
        deleteIconElmt.addEventListener('click', () => {
            removeTag(tagElmt);
            displayTagList();
        });
    });
};
