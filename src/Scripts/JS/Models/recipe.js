import { capitalizeFirstLetter, normalizeString, } from '../Utils/js-functions.js';
import { TagList } from './tag-list.js';
import { Tag } from './tag.js';
export class Recipe {
    constructor(recipeData) {
        this._recipeData = recipeData;
        this.ingredientTags = this._createIngredientTags();
        this.applianceTags = this._createApplianceTags();
        this.utensilTags = this._createUtensilTags();
    }
    get id() {
        return this._recipeData.id;
    }
    get name() {
        return capitalizeFirstLetter(this._recipeData.name);
    }
    get servings() {
        return this._recipeData.servings;
    }
    get time() {
        return `${this._recipeData.time.toString()} min`;
    }
    get description() {
        const ingredientList = [];
        this._recipeData.ingredients.forEach((ingredient) => {
            ingredientList.push({
                name: capitalizeFirstLetter(ingredient.ingredient),
                quantity: ingredient.quantity
                    ? `${ingredient.quantity.toString()}${ingredient.unit ? ' ' + ingredient.unit.toLowerCase() : ''}`
                    : undefined,
            });
        });
        return {
            ingredientList,
            text: this._recipeData.description,
        };
    }
    includesString(string) {
        const normalizedString = normalizeString(string);
        let isIncluded = false;
        if (normalizeString(this._recipeData.name).includes(normalizedString))
            isIncluded = true;
        this._recipeData.ingredients.forEach((ingredient) => {
            if (normalizeString(ingredient.ingredient).includes(normalizedString))
                isIncluded = true;
        });
        if (normalizeString(this._recipeData.description).includes(normalizedString))
            isIncluded = true;
        return isIncluded;
    }
    includesTag(tag) {
        let isIncluded = false;
        switch (tag.type) {
            case 'ingredient':
                isIncluded = this.ingredientTags.includesTag(tag);
                break;
            case 'appliance':
                isIncluded = this.applianceTags.includesTag(tag);
                break;
            case 'utensil':
                isIncluded = this.utensilTags.includesTag(tag);
                break;
            default:
                break;
        }
        return isIncluded;
    }
    _createIngredientTags() {
        const tags = new TagList();
        this._recipeData.ingredients.forEach((ingredient) => {
            tags.addTag(new Tag(ingredient.ingredient, 'ingredient'));
        });
        return tags;
    }
    _createApplianceTags() {
        const tags = new TagList();
        tags.addTag(new Tag(this._recipeData.appliance, 'appliance'));
        return tags;
    }
    _createUtensilTags() {
        const tags = new TagList();
        this._recipeData.ustensils.forEach((utensil) => {
            tags.addTag(new Tag(utensil, 'utensil'));
        });
        return tags;
    }
}
