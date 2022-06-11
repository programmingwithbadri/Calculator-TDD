const parseDelimiters = (customDelimiter) => {
  let delimiters = '|' + customDelimiter;

  if (customDelimiter.indexOf('[') === 0) {
    customDelimiter = customDelimiter.split('[').slice(1);
    delimiters = customDelimiter.reduce(function (acc, d) {
      return acc += '|' + d.substring(0, d.length - 1).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }, '');
  }

  return delimiters;
};

const parseNumbers = (stringNumbers) => {
  let delimiters =  '\n|,';

  if (stringNumbers.indexOf('//') === 0) {
    delimiters += parseDelimiters(stringNumbers.substring(2, stringNumbers.indexOf('\n')));
    stringNumbers = stringNumbers.substring(stringNumbers.indexOf('\n'));
  }

  return stringNumbers.split(new RegExp('(' + delimiters + ')'));
};

const add = (stringNumbers) => {
  const numbers = parseNumbers(stringNumbers);

  return numbers.reduce((acc, num) => {
    num = Number(num);
    if (num < 0) {
      throw new Error('negatives not allowed');
    }

    return acc + (num <= 1000 ? num : 0);
  }, 0);
}

module.exports = add;