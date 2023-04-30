var Cat = (function () 
{
    const cats = []
  
    const constructor = function (name, weight) {
      if (!name || !weight) throw Error('invalid parameters')

      Object.defineProperty(this, 'name', { get: () => name })
      Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
      cats.push(this)
    }
  let sum=0;
    for(let i=0; i<cats.length; i++){
        sum += cats[i].weight;
    }
    // constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
    constructor.averageWeight = () => sum / cats.length

    return constructor
}())


const fluffy = new Cat('Fluffy', 5)
const whiskers = new Cat('Whiskers', 3)

console.log(Cat.averageWeight());