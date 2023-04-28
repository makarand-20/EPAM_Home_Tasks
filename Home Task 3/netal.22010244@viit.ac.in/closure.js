/**
   garfield = new Cat('garfield', 25);
   Cat.averageWeight(); // 25
   felix = new Cat('felix', 15);
   Cat.averageWeight();   // now 20

Summary of requirements:
Cat constructor, requiring arguments for name and weight, Throw an error if name or weight not specified when invoking the 
constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's 
properties have changed. Must use Object.defineProperty
 */

var Cat = (function () 
{
    const cats = []
  
    const constructor = function (name, weight) {
      if (!name || !weight) throw Error('invalid parameters')

      /**Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the 
       * average weight each time is easier, but would prevent garbage collection from working properly if used in a production 
       * environment.*/
      Object.defineProperty(this, 'name', { get: () => name })
      Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
      cats.push(this)
    }
  
    constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
    return constructor
}())
