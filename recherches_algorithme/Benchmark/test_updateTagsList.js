const Benchmark = require('benchmark')

const suite = new Benchmark.Suite('Test sort list')

const recipesList = [
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
  {
    tagsList: [
      { label: 'Banane' },
      { label: 'Lait de coco' },
      { label: 'Jus de citron' },
      { label: 'Sucre' },
      { label: 'Glaçons' },
      { label: 'Concombre' },
      { label: 'Tomate' },
      { label: 'Carotte' },
      { label: 'Citron Vert' },
      { label: 'Coulis de tomate' },
    ],
  },
]

const arrayMethod = () => {
  const thisList = []

  recipesList.forEach((recipe) => {
    recipe.tagsList.forEach((tag) => {
      thisList.push(tag)
    })
  })
}

const nativeLoops = () => {
  const thisList = []

  for (const recipe of recipesList) {
    for (const tag of recipe.tagsList) {
      thisList.push(tag)
    }
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

// arrayMethod x 2,821,343 ops/sec ±0.62% (95 runs sampled)
// nativeLoops x 2,398,956 ops/sec ±0.48% (93 runs sampled)
// The fastest option is arrayMethod (x 1.18)
