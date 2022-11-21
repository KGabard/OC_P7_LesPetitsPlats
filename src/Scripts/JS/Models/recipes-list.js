import { recipesData } from '../Data/recipes.js';
import { Recipe } from './recipe.js';
import { TagList } from './tag-list.js';
export class RecipesList {
    constructor() {
        this.list = this._importRecipesData();
        this.ingredientsList = this._createTagsList().ingredientsList;
        this.appliancesList = this._createTagsList().appliancesList;
        this.utensilsList = this._createTagsList().utensilsList;
        this.selectedTagsList = new TagList();
    }
    _importRecipesData() {
        const importedRecipesList = [];
        recipesData.forEach((recipeData) => {
            importedRecipesList.push(new Recipe(recipeData));
        });
        return importedRecipesList;
    }
    _createTagsList() {
        const ingredientsList = new TagList();
        const appliancesList = new TagList();
        const utensilsList = new TagList();
        this.list.forEach((recipe) => {
            ingredientsList.addTagList(recipe.ingredientTags);
            appliancesList.addTagList(recipe.applianceTags);
            utensilsList.addTagList(recipe.utensilTags);
        });
        ingredientsList.sortByTagLabel();
        appliancesList.sortByTagLabel();
        utensilsList.sortByTagLabel();
        return { ingredientsList, appliancesList, utensilsList };
    }
}
