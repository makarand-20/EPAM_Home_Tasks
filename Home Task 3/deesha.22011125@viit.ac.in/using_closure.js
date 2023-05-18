var Cat = (function () {
    const cats = []
  
    const constructor = function (name, weight) {
      if (!name || !weight) throw Error('invalid parameters')
      Object.defineProperty(this, 'name', { get: () => name })
      Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
      cats.push(this)
    }
  
    constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
  
    return constructor
  }())
  