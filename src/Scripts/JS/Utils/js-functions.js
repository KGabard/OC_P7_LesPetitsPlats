// Function that capitalize the first letter of a string and lower the case of all other letters
export const capitalizeFirstLetter = (string) => {
    string = string[0].toUpperCase() + string.substring(1).toLocaleLowerCase();
    return string;
};
