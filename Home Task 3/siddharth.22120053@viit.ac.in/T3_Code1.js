// http://www.codewars.com/kata/using-closures-to-share-class-state


var Cat = (function () {
    var allCats = [];
    
    function Cat(name, weight) {
      if (!name || !weight) {
        throw new Error('Both name and weight are required');
      }
      this.name = name;
      this._weight = weight;
      allCats.push(this);
      
      Object.defineProperty(this, 'weight', {
        get: function () {
          return this._weight;
        },
        set: function (newWeight) {
          allCats.splice(allCats.indexOf(this), 1);
          this._weight = newWeight;
          allCats.push(this);
        }
      });
    }
    
    Cat.averageWeight = function () {
      if (allCats.length === 0) {
        return 0;
      }
      var sum = allCats.reduce(function (acc, cat) {
        return acc + cat.weight;
      }, 0);
      return sum / allCats.length;
    };
    
    return Cat;
  }());
  