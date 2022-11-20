type IngredientType = {
  ingredient: string
  quantity?: number
  unit?: string
}

export type RecipeDataType = {
  id: number
  name: string
  servings: number
  ingredients: IngredientType[]
  time: number
  description: string
  appliance: string
  ustensils: string[]
}
