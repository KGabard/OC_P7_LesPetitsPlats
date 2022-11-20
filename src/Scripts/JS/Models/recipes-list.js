import { recipesData } from '../Data/recipes.js';
import { Recipe } from './recipe.js';
import { TagList } from './tag-list.js';
export class RecipesList {
    constructor() {
        this.list = this._importRecipesData();
        this.ingredientsList = this._createIngredientsList();
    }
    _importRecipesData() {
        const importedRecipesList = [];
        recipesData.forEach((recipeData) => {
            importedRecipesList.push(new Recipe(recipeData));
        });
        return importedRecipesList;
    }
    _createIngredientsList() {
        const ingredientList = new TagList();
        this.list.forEach((recipe) => {
            recipe.ingredientTags.list.forEach((ingredientTag) => {
                ingredientList.addTag(ingredientTag);
            });
        });
        ingredientList.sortByTagLabel();
        return ingredientList;
    }
}
