function multiBracketValidation(input) {
  const array = [];
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      array.push(input[i]);
    }
    if ((input[i] === ')' && array[array.length - 1] === '(')
        || (input[i] === '}' && array[array.length - 1] === '{')
        || (input[i] === ']' && array[array.length - 1] === '[')) {
      array.pop();
    } else if ((input[i] === ')' && array[array.length - 1] !== '(')
        || (input[i] === '}' && array[array.length - 1] !== '{')
        || (input[i] === ']' && array[array.length - 1] !== '[')) {
  
      return false;
    }
  }
  if (array.length === 0){
    return true;
  }
}
  
console.log(multiBracketValidation('{}'));
console.log(multiBracketValidation('{}(){}'));
console.log(multiBracketValidation('()[[Extra Characters]]'));
console.log(multiBracketValidation('(){}[[]]'));
console.log(multiBracketValidation('{}{Code}[Fellows](())'));
console.log(multiBracketValidation('[({}]'));
console.log(multiBracketValidation('(]('));
console.log(multiBracketValidation('{(})'));
module.exports = multiBracketValidation;