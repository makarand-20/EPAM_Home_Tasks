function createFunctions(n) {
var callbacks = [];
var fu = function (x) {
return function () { return x };
};

for (var i=0; i<n; i++) {
callbacks.push(fu(i));
}

return callbacks;
}
