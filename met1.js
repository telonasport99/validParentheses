function validParentheses(parens) {
    let arr = parens.split('');
    if(
        arr[0] === ')'||
        arr[arr.length-1] === '(' ||
        arr.length % 2 != 0
    ){
        return false;
    }
    let leftCounter = 0;
    let rightCounter = 0;
    arr.forEach(el =>{
        el === '('? leftCounter++ : rightCounter++
    })
    return (leftCounter === rightCounter)
}