import type { RecipeDataType } from '../Types/types.js'
import { capitalizeFirstLetter } from '../Utils/js-functions.js'
import { TagList } from './tag-list.js'
import { Tag } from './tag.js'

export class Recipe {
  _recipeData: RecipeDataType
  ingredientTags: TagList
  applianceTags: TagList
  utensilTags: TagList

  constructor(recipeData: RecipeDataType) {
    this._recipeData = recipeData
    this.ingredientTags = this._createIngredientTags()
    this.applianceTags = this._createApplianceTags()
    this.utensilTags = this._createUtensilTags()
  }

  get id() {
    return this._recipeData.id
  }

  get name() {
    return capitalizeFirstLetter(this._recipeData.name)
  }

  get servings() {
    return this._recipeData.servings
  }

  get time() {
    return `${this._recipeData.time.toString()} min`
  }

  get description() {
    const ingredientList: Array<{
      name: string
      quantity?: string
    }> = []
    this._recipeData.ingredients.forEach((ingredient) => {
      ingredientList.push({
        name: capitalizeFirstLetter(ingredient.ingredient),
        quantity: ingredient.quantity
          ? `${ingredient.quantity.toString()}${
              ingredient.unit ? ' ' + ingredient.unit.toLowerCase() : ''
            }`
          : undefined,
      })
    })
    return {
      ingredientList,
      text: this._recipeData.description,
    }
  }

  _createIngredientTags() {
    const tags = new TagList()
    this._recipeData.ingredients.forEach((ingredient) => {
      tags.addTag(new Tag(ingredient.ingredient, 'ingredient'))
    })
    return tags
  }

  _createApplianceTags() {
    const tags = new TagList()
    tags.addTag(new Tag(this._recipeData.appliance, 'appliance'))
    return tags
  }

  _createUtensilTags() {
    const tags = new TagList()
    this._recipeData.ustensils.forEach((utensil) => {
      tags.addTag(new Tag(utensil, 'utensil'))
    })
    return tags
  }
}
