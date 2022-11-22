import { recipesData } from '../Data/recipes.js'
import { normalizeString } from '../Utils/js-functions.js'
import { Recipe } from './recipe.js'
import { TagList } from './tag-list.js'

export class RecipesList {
  list: Recipe[]
  filteredList: Recipe[]
  ingredientsList: TagList
  appliancesList: TagList
  utensilsList: TagList
  selectedTagsList: TagList

  constructor() {
    this.list = this._importRecipesData()
    this.filteredList = this.list
    this.ingredientsList = new TagList()
    this.appliancesList = new TagList()
    this.utensilsList = new TagList()
    this._resetTagsList()
    this.selectedTagsList = new TagList()
  }

  resetFilteredList() {
    this.filteredList = this.list
    this._resetTagsList()
  }

  filterList(filter: string) {
    this.filteredList = this.filteredList.filter((recipe) =>
      recipe.includesString(filter)
    )
    this._resetTagsList()
  }

  _resetTagsList() {
    this.ingredientsList.emptyList()
    this.appliancesList.emptyList()
    this.utensilsList.emptyList()

    this.filteredList.forEach((recipe) => {
      this.ingredientsList.addTagList(recipe.ingredientTags)
      this.appliancesList.addTagList(recipe.applianceTags)
      this.utensilsList.addTagList(recipe.utensilTags)
    })

    this.ingredientsList.sortByTagLabel()
    this.appliancesList.sortByTagLabel()
    this.utensilsList.sortByTagLabel()
  }

  _importRecipesData() {
    const importedRecipesList: Recipe[] = []
    recipesData.forEach((recipeData) => {
      importedRecipesList.push(new Recipe(recipeData))
    })
    return importedRecipesList
  }
}
