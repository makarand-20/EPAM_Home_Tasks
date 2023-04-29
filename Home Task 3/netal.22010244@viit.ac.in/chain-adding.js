//chain adding function
function add(n) 
{
    const func = x => add(n + x)
    func.valueOf = () => n
    return func
}