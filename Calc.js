function add(a,b){
    console.log("Addition="+(a+b))
}
function sub(a,b){
    console.log("Subtraction="+a-b)
}
function mult(a,b){
    console.log("Multiplication="+a*b)
}
module.exports.Addition = add
module.exports.Subtraction = sub
export default mult