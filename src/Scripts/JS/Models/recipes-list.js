// import { recipesData } from '../../../Data/recipes.js'
// "Could not find a declaration file for module"
import { recipesData } from '../Data/recipes.js';
import { Recipe } from './recipe.js';
import { TagList } from './tag-list.js';
export class RecipesList {
    constructor() {
        this.originList = this._importRecipesData();
        this.filteredList = this.originList.slice();
        this.ingredientsList = new TagList();
        this.appliancesList = new TagList();
        this.utensilsList = new TagList();
        this._updateTagsList();
        this.selectedTagsList = new TagList();
    }
    resetFilteredList() {
        this.filteredList = this.originList.slice();
        this._updateTagsList();
    }
    filterListByKeyword(filter) {
        // Algo2 : use of native loops
        for (let i = this.filteredList.length - 1; i >= 0; i--) {
            const recipe = this.filteredList[i];
            if (!recipe.includesKeyword(filter)) {
                if (i < this.filteredList.length - 1) {
                    for (let j = i; j < this.filteredList.length - 1; j++) {
                        this.filteredList[j] = this.filteredList[j + 1];
                    }
                }
                this.filteredList.length = this.filteredList.length - 1;
            }
        }
        this._updateTagsList();
    }
    filterListBySelectedTags() {
        this.filteredList = this.filteredList.filter((recipe) => recipe.includesTagList(this.selectedTagsList));
        this._updateTagsList();
    }
    _updateTagsList() {
        this.ingredientsList.emptyList();
        this.appliancesList.emptyList();
        this.utensilsList.emptyList();
        // Algo2 : use of native loops
        for (const recipe of this.filteredList) {
            this.ingredientsList.addTagList(recipe.ingredientTags);
            this.appliancesList.addTagList(recipe.applianceTags);
            this.utensilsList.addTagList(recipe.utensilTags);
        }
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
