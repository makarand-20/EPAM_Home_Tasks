function oper(a,b,c){
    if(a==='+'){
        return (c+b);
    }
    else if(a==='-'){
        return (b-c);
    }
    else if(a==='*'){
        return (b*c);
    }
    else if(a==='/'){
        return (b/c);
    }
    else{
        return ("wrong operation.");
    }
}
m=oper('+',4,5);
console.log(m);