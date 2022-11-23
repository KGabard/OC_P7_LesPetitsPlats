// import { recipesData } from '../../../Data/recipes.js'
// "Could not find a declaration file for module"
import { recipesData } from '../Data/recipes.js';
import { Recipe } from './recipe.js';
import { TagList } from './tag-list.js';
export class RecipesList {
    constructor() {
        this.originList = this._importRecipesData();
        this.filteredList = this.originList;
        this.ingredientsList = new TagList();
        this.appliancesList = new TagList();
        this.utensilsList = new TagList();
        this._updateTagsList();
        this.selectedTagsList = new TagList();
    }
    resetFilteredList() {
        this.filteredList = this.originList;
        this._updateTagsList();
    }
    filterListByKeyword(filter) {
        this.filteredList = this.filteredList.filter((recipe) => recipe.includesKeyword(filter));
        this._updateTagsList();
    }
    filterListBySelectedTags() {
        this.filteredList = this.filteredList.filter((recipe) => {
            if (recipe.includesTagList(this.selectedTagsList)) {
                console.log(recipe.name);
            }
            return recipe.includesTagList(this.selectedTagsList);
        });
        console.log(this.filteredList.length);
        this._updateTagsList();
    }
    _updateTagsList() {
        this.ingredientsList.emptyList();
        this.appliancesList.emptyList();
        this.utensilsList.emptyList();
        this.filteredList.forEach((recipe) => {
            this.ingredientsList.addTagList(recipe.ingredientTags);
            this.appliancesList.addTagList(recipe.applianceTags);
            this.utensilsList.addTagList(recipe.utensilTags);
        });
        this.ingredientsList.sortByTagLabel();
        this.appliancesList.sortByTagLabel();
        this.utensilsList.sortByTagLabel();
    }
    _importRecipesData() {
        const importedRecipesList = [];
        recipesData.forEach((recipeData) => {
            importedRecipesList.push(new Recipe(recipeData));
        });
        return importedRecipesList;
    }
}
