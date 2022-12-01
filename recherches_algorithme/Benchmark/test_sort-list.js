const Benchmark = require('benchmark')

const suite = new Benchmark.Suite('Test sort list')

const tagsList = [
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
]

const tagLabelsComparator = (a, b) => a.label.localeCompare(b.label)

const arrayMethod = () => {
  const list = tagsList.slice()
  list.sort(tagLabelsComparator)
}

const nativeLoops = () => {
  const list = tagsList.slice()
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (tagLabelsComparator(list[i], list[j]) < 0) {
        const tempTag = list[i]
        list[i] = list[j]
        list[j] = tempTag
      }
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

// arrayMethod x 390,908 ops/sec ±0.47% (94 runs sampled)
// nativeLoops x 237,854 ops/sec ±0.66% (94 runs sampled)
// The fastest option is arrayMethod (x 1.64)
