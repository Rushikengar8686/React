let a = 10
let b = 20

const SumOfTwo = (a,b)=>{
    return a+b 
}
const Subtractions  = (a,b)=>{
    return a-b
}
const MultiPlications = (a,b)=>{
    return a*b
}
const Division = (a,b)=>{
    return a/b
}
const modules = (a,b)=>{
    return a%b
}

module.exports = {
    SumOfTwo : SumOfTwo(a,b),
    subtractionsOfTwo : Subtractions(a,b),
    MultiPlications: MultiPlications(a,b),
    Division: Division(a,b),
    modules:modules(a,b)
}