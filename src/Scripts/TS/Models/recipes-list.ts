// import { recipesData } from '../../../Data/recipes.js'
// "Could not find a declaration file for module"
import { recipesData } from '../Data/recipes.js'
import { Recipe } from './recipe.js'
import { TagList } from './tag-list.js'

export class RecipesList {
  originList: Recipe[]
  filteredList: Recipe[]
  ingredientsList: TagList
  appliancesList: TagList
  utensilsList: TagList
  selectedTagsList: TagList

  constructor() {
    this.originList = this._importRecipesData()
    this.filteredList = this.originList
    this.ingredientsList = new TagList()
    this.appliancesList = new TagList()
    this.utensilsList = new TagList()
    this._updateTagsList()
    this.selectedTagsList = new TagList()
  }

  resetFilteredList() {
    this.filteredList = this.originList
    this._updateTagsList()
  }

  filterListByKeyword(filter: string) {
    // Algo2 : use of native loops
    for (let i = this.filteredList.length - 1; i >= 0; i--) {
      const recipe = this.filteredList[i]
      if (!recipe.includesKeyword(filter)) {
        this.filteredList = this.filteredList
          .slice(0, i)
          .concat(this.filteredList.slice(i + 1))
      }
    }

    this._updateTagsList()
  }

  filterListBySelectedTags() {
    this.filteredList = this.filteredList.filter((recipe) =>
      recipe.includesTagList(this.selectedTagsList)
    )
    this._updateTagsList()
  }

  private _updateTagsList() {
    this.ingredientsList.emptyList()
    this.appliancesList.emptyList()
    this.utensilsList.emptyList()

    // Algo2 : use of native loops
    for (const recipe of this.filteredList) {
      this.ingredientsList.addTagList(recipe.ingredientTags)
      this.appliancesList.addTagList(recipe.applianceTags)
      this.utensilsList.addTagList(recipe.utensilTags)
    }

    this.ingredientsList.sortByTagLabel()
    this.appliancesList.sortByTagLabel()
    this.utensilsList.sortByTagLabel()
  }

  private _importRecipesData() {
    const importedRecipesList: Recipe[] = []
    recipesData.forEach((recipeData) => {
      importedRecipesList.push(new Recipe(recipeData))
    })
    return importedRecipesList
  }
}
