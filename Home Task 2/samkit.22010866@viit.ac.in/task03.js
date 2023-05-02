let value1=45;
let value2=30;

let operation='+';
function basicOp(operation, value1, value2)
{
  if(operation=="+")
    {
       return value1+value2;
    }
  if(operation=="-")
    {
       return value1-value2;
    }
  if(operation=="*")
    {
       return value1*value2;
    }
  if(operation=="/")
    {
       return value1/value2;
    }
}

console.log(basicOp('-',45,30));