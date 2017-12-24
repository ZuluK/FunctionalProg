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
  str.replace('vodak', 'whiskey (FTFY)')//function that takes a string and replaces the string vodak with the string of whiskey
);
const helpIfConfused = (person) => ({
  ...person,//
  beverages: person.beverages.map(fixBeverage)
});
const.fixed = people.map(helpIfConfused);
//two step function.


/*  What the EFF's A Map? */
A powerful way of adding a function to each element of an array.

//Array.prototype.map();

//Which means that this...
const double = num => num * 2;
const numbers = [1,2,3];
const nextNumbers = [];
for (let x in numbers){
  nextNumbers[x] = double(numbers[x]);
}

//...Is the same as this.
const double = num => num * 2;
const numbers = [1,2,3];
const nextNumbers = numbers.map(double);
//cleaner code and easier to understand



/* ProTIP!: Get comfrontable with array methods */

Array.prototype.filter();//really good at getting numbers to put in a list
Array.prototype.sort();//to apply sorting functions
Array.prototype.every();//if everything in the list matches then it returns true.



/* RULE #2 The Same Input Always returns the same result */

//PURE VS IMPURE functions

//Scenario: Tell people about your favorite thing

/*--               An IMPURE solution         --*/
let myFavoriteThing = 'whiskey';

function describeMyFavoriteThing(){
  return 'I prefer to drink quality ${myFavoriteThing}.';
}

//Wait! New Feature Request:
function clarifyFavoriteThing(){
  myFavoriteThing = 'aged' + myFavoriteThing;
}

//Then Legal gets involved:
function makeFamilyFriendly(){
  myFavoriteThing = "scented bubble bath";
}
//Good Luck Debugging This:
let myFavoriteThing = 'whiskey';

clarifyFavoriteThing();
describeMyFavoriteThing();
//=>"I prefer to drink quality aged whiskey"

//..probably a bunch of additional code..
makeFamilyFriendly();
//..probably more additional code..

describeMyFavoriteThing();
//=>"I prefer to drink quality scented bubble bath."




/*--               A PURE approach            --*/
//No global variable...the variable is the argument
function describeMyFavoriteThing(beverage){
  return "I prefer to drink quality ${beverage}.";
}
function clarifyFavoriteThing(favoriteThing){
  return "aged ${favoriteThing}";
}
function makeFamilyFriendly(){
  return 'scented bubble bath';
}
//very predictable code
//Notice that there is no global and there is always an return value.


//We can clearly follow what's happening:
const myFavoriteThing = 'whiskey';
const clarified = clarifyFavoriteThing(myFavoriteThing);
const newFavorite = makeFamilyFriendly();

describeMyFavoriteThing(myFavoriteThing);
//=>"I prefer to drink quality whiskey."
describeMyFavoriteThing(clarified);
//=>"I prefer to drink quality age whisky."
describeMyFavoriteThing(newFavorite);
//=>"I prefer to drink quality scented bubble bath"

//Debugging is Easy:
//Start debugging here:
describeMyFavoriteThing(newFavorite);

/* This process is called 'Referential Transparency'
  This means the function call can always be replaced with it's return value
  without breaking the program. */


  /* This enables a functional technique called: Compostion */

  function describeMyFavoriteThing(beverage){
    return 'I prefer to drink quality ${beverage}';
  }
  function clarifyFavoriteThing(favoriteThing){
    return 'aged ${favoriteThing}';
  }
  const showClarifiedFavorite = R.compose(
    describeMyFavoriteThing,
    clarifyFavoriteThing
  );
  const result = showClarifiedFavorite('whiskey');


  /*  RULE 3: EACH FUNCTION DOES ONE THING */

  //Scenario: Filter by Genre & Sort By Artist

  const albums = [
    {
      name: "10,000 Days",
      artist: "TOOL",
      genre: 'metal',
    },
    {
      name: "R U Still Down?",
      artist: "TUPAC",
      genre: 'hip-hop',
    },
    {
      name: "2+2=5",
      artist: "Radiohead",
      genre: "alternative"
    };
  }];

//An ALL-IN-ONE SOLUCTION

function getOnlyIndie(albums){
  let filtered = [];
  for (let album of albums){
    if (album.genre === "indie"){
      filtered.push(album);
    }
  }
  filtered.sort((album1, album2) => {
    if (album1.artist === album2.artist) return 0;
    return album1.artist > album2.artist ? 1 : -1;
  });
  return filtered;
}


//ONE FUNCTION PER step
const byArtistAsc = (album1, album2) => {
  if (album1.artist === album2.artist){
    return 0;
  }
  return album1.artist > album2.artist ? 1 : -1;
};

const getOnlyIndie = album => album.genre === 'indie';

albums.filter(getOnlyIndie).sort(byArtistAsc);
