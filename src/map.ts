import Benchmark from 'benchmark'

new Benchmark.Suite()
  .add('map()', () => {
    const result = [0, 1, 2, 3, 4].map(value => value * value)
    result
  })
  .add('forEach()', () => {
    const result = [0, 1, 2, 3, 4]

    result.forEach((value, i) => {
      result[i] = value * value
    })
  })
  .add('for of loop', () => {
    const result = [0, 1, 2, 3, 4]
    for (const [i, value] of result.entries()) result[i] = value * value
  })
  .add('for in loop', () => {
    const result = [0, 1, 2, 3, 4]
    for (const i in result) result[i] = result[i] * result[i]
  })
  .add('for loop', () => {
    const result = [0, 1, 2, 3, 4]
    for (let i = 0; i !== result.length; ++i) result[i] = result[i] * result[i]
  })
  .on('cycle', event => {
    console.log(event.target.toString())
  })
  .on('complete', event => {
    console.log(`Fastest is ${event.currentTarget.filter('fastest').map('name')}`)
  })
  .run({ async: true })
