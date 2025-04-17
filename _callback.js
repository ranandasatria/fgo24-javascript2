const calculate = (num1, num2, cb) =>{
   return cb(num1, num2)
}

const multiply = (x1, x2)=>{
    return x2 * x2
}

const divide = (y1, y2) => {
    return y1 / y2
}

const result1 = calculate(5,5, multiply)
// const result2 = calculate(5,2, divide)
// const result3 = calculate(5,2,function(a1,s2){
// return a1+a2
// })


console.log(result1)