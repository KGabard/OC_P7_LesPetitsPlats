// Function that capitalize the first letter of a string and lower the case of all other letters
export const capitalizeFirstLetter = (string) => {
    string = string[0].toUpperCase() + string.substring(1).toLocaleLowerCase();
    return string;
};
// Function that normalize a string: lower case, no accents, no spaces
export const normalizeString = (string) => {
    string = string.toLocaleLowerCase();
    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    string = string.replace(/ /g, '');
    return string;
};
