const add = (stringNumbers) => {
  const numbers = stringNumbers
    .replace(/(\n)/gm, ',') 
    .split(',')                     
    .map(n => parseInt(n, 10)) 

  return numbers.reduce((acc, num) => {
    if (num < 0) {
      throw new Error('negatives not allowed');
    }

    return acc + (num <= 1000 ? num : 0);
  }, 0);
}

module.exports = add;