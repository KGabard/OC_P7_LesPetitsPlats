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
    includesKeyword(keyword) {
        keyword = normalizeString(keyword);
        if (normalizeString(this._recipeData.name).includes(keyword))
            return true;
        this._recipeData.ingredients.forEach((ingredient) => {
            if (normalizeString(ingredient.ingredient).includes(keyword))
                return true;
        });
        if (normalizeString(this._recipeData.description).includes(keyword))
            return true;
        return false;
    }
    includesTag(tag) {
        switch (tag.type) {
            case 'ingredient':
                if (this.ingredientTags.includesTag(tag))
                    return true;
                break;
            case 'appliance':
                if (this.applianceTags.includesTag(tag))
                    return true;
                break;
            case 'utensil':
                if (this.utensilTags.includesTag(tag))
                    return true;
                break;
            default:
                break;
        }
        return false;
    }
    includesTagList(taglist) {
        let tagListIncluded = true;
        taglist.list.forEach((tag) => {
            if (!this.includesTag(tag))
                tagListIncluded = false;
        });
        return tagListIncluded;
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
