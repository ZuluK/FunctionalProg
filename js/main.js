/* -- Function programming for people who hate math --*/


//What is functional programming?
Helps us write code that is easier to understand and debug
Its cheaper and easier to maintain
More legible
More reusable
More testable
Less error prone


//To Accomplish this, our code follows a few rules:
1. Use Functions over loops whenver possible
2. Always return the same result given the same arguments.
3. Write functions that do one thing.

//Let's learn how.
Functions are better than loops
//imperative programming is code that explicity describes how to do something.
//example.
let fixed = [];
for (let person of people){
  if(person.beverages){
    for(let beverage in person.beverages){
      if(person.beverages[beverage] === 'vodak'){
        person.beverages[beverage] = "whiskey (FTFY)"
      }
    }
  }
}//Pyramid of doom!!
fixed.push(person);


//Declarative programming code that describes what the result should be (This is the foundation of Functional Programming)
//example
const fixBeverage = (str) => (
  str.replace('vodak', 'whiskey (FTFY)')
);
const helpIfConfused = (person) => ({
  ...person,
  beverages: person.beverages.map(fixBeverage)
});
const.fixed = people.map(helpIfConfused);



/*  What the EFF's A Map? */
A powerful way of adding a function to each element of an array. 
