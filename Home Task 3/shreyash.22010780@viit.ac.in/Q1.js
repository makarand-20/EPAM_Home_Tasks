var Cat = (function () {
  var cats = [];
  
  function Cat(name, weight) {
    if (!name || !weight) {
      throw new Error("Both name and weight must be supplied");
    }
    cats.push(this);
    
    Object.defineProperty(this, "name", {
      get: function () {
        return name;
      },
      set: function (value) {
        name = value;
      }
    });
    
    Object.defineProperty(this, "weight", {
      get: function () {
        return weight;
      },
      set: function (value) {
        weight = value;
      }
    });
  }
  
  Cat.averageWeight = function () {
    return cats.reduce(function (prev, cat) {
      return prev + cat.weight;
    }, 0) / cats.length;
  };
  
  return Cat;
}());
