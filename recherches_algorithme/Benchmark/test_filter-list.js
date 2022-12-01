const Benchmark = require('benchmark')

const suite = new Benchmark.Suite('Test filter list')

const recipesList = [
  { includesKeyword: true },
  { includesKeyword: false },
  { includesKeyword: true },
  { includesKeyword: true },
  { includesKeyword: false },
  { includesKeyword: false },
  { includesKeyword: true },
  { includesKeyword: true },
  { includesKeyword: false },
  { includesKeyword: true },
]

const arrayMethod = (recipesList) => {
  recipesList.filter((recipe) => recipe.includesKeyword)
}

const nativeLoops = (recipesList) => {
  for (let i = recipesList.length - 1; i >= 0; i--) {
    const recipe = recipesList[i]
    if (!recipe.includesKeyword) {
      if (i < recipesList.length - 1) {
        for (let j = i; j < recipesList.length - 1; j++) {
          recipesList[j] = recipesList[j + 1]
        }
      }

      recipesList.length -= 1
    }
  }
}

suite
  .add('arrayMethod', () => arrayMethod(recipesList.slice()))
  .add('nativeLoops', () => nativeLoops(recipesList.slice()))
  .on('cycle', (event) => {
    const benchmark = event.target
    console.log(benchmark.toString())
  })
  .on('complete', (event) => {
    const suite = event.currentTarget
    const fastestOption = suite.filter('fastest').map('name')
    const speedRatio =
      suite[0].hz > suite[1].hz
        ? suite[0].hz / suite[1].hz
        : suite[1].hz / suite[0].hz
    console.log(
      `The fastest option is ${fastestOption} (x ${speedRatio.toFixed(2)})`
    )
  })
  .run()

// ArrayMethod x 20,338,207 ops/sec ±0.44% (96 runs sampled)
// nativeLoops x 4,139,581 ops/sec ±0.33% (96 runs sampled)
// The fastest option is arrayMethod (x 4.91)
