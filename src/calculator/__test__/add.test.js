const add = require("../add");

describe("Add numbers",  function(){
    it("should return zero when empty string is passed", () => {
      expect(add('')).toEqual(0);
    });

    it("should return the number itself when a single number is passed", () => {
      expect(add('10')).toEqual(10);
    });

    it("should return the sum of two numbers if two numbers are passed", () => {
      expect(add('1,2')).toEqual(3);
    });
    
    it("should return the sum of an unknown amount of numbers", function(){
      const unknownAmountOfNumbers = Math.floor((Math.random() * 100));
      const numbersArray = Array(unknownAmountOfNumbers).fill().map(
        () => Math.round(Math.random() * unknownAmountOfNumbers)
      );
           
      const sumOfTheArray = numbersArray.reduce((a, b) => a + b, 0);

      const unknownAmountOfNumbersArg= numbersArray.join();
      expect(add(unknownAmountOfNumbersArg)).toEqual(sumOfTheArray);
    });
    
    it("should not allow negative numbers to be passed as arguments", () => {
      expect(() => add("-1,2")).toThrow(new Error("negatives not allowed"));
    });

    it("should allow \\n in between the input number string", () => {
      expect(add("1\n2,3")).toEqual(6);
    });
});