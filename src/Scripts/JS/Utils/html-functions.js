// Function that check if 'main-class--active' exist
export const elmtIsActive = (elmt) => elmt.classList.contains(elmt.classList[0] + '--active');
// Function that removes 'main-class--active' class
export const closeElmt = (elmt) => {
    elmt.classList.remove(`${elmt.classList[0]}--active`);
};
// Function that adds 'main-class--active' class
export const openElmt = (elmt) => {
    elmt.classList.add(`${elmt.classList[0]}--active`);
};
