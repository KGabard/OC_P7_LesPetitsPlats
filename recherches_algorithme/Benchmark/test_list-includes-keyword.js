const Benchmark = require('benchmark')

const suite = new Benchmark.Suite('List includes keyword')

const ingredientsList = [
  { name: 'Banane' },
  { name: 'Lait de coco' },
  { name: 'Jus de citron' },
  { name: 'Sucre' },
  { name: 'Glaçons' },
  { name: 'Concombre' },
  { name: 'Tomate' },
  { name: 'Carotte' },
  { name: 'Citron Vert' },
  { name: 'Coulis de tomate' },
]

const keyword = 'toma'

const normalizeString = (string) => {
  string = string.toLocaleLowerCase()
  string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  string = string.replace(/ /g, '')
  return string
}

const arrayMethod = () => {
  ingredientsList.forEach((ingredient) => {
    if (normalizeString(ingredient.name).includes(keyword)) return true
  })
}

const nativeLoops = () => {
  for (const ingredient of ingredientsList) {
    if (normalizeString(ingredient.name).includes(keyword)) return true
  }
}

suite
  .add('arrayMethod', arrayMethod)
  .add('nativeLoops', nativeLoops)
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

// arrayMethod x 303,196 ops/sec ±0.52% (93 runs sampled)
// nativeLoops x 413,893 ops/sec ±0.42% (92 runs sampled)
// The fastest option is nativeLoops (x 1.37)
