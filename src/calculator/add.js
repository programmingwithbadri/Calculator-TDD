const add = (numbers) => {
    if (numbers.includes('-')) {
        throw new Error('negatives not allowed');
    }
    if(!numbers) {
        return 0;
    } else if(numbers.length === 1) { 
        return (Number(numbers));
    } else {
        const numbersToAdd = numbers.split(',');
        return numbersToAdd.reduce((a, b) => Number(a)+ Number(b), 0);  
    }
}

module.exports = add;