const add = (stringNumbers) => {
    const numbers = stringNumbers
      .replace(/(\n)/gm, ',') 
      .split(',')                     
      .map(n => parseInt(n, 10)) 

    if(numbers.some(number => isNaN(number))) return 0;   
    if(numbers.some(number => number < 0)) throw new Error('negatives not allowed')
    
    return numbers.reduce((a, b) => a + b)
}

module.exports = add;