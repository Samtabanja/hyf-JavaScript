let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push ('turtle')
console.log(favoriteAnimals)
//(4) ["blowfish", "capricorn", "giraffe", "turtle"]

favoriteAnimals.splice(1,0,"meerkat")
console.log(favoriteAnimals)
//(5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

console.log("the array has a length of " + favoriteAnimals.length)
//the array has a length of 5

favoriteAnimals.splice(3,1)
console.log(favoriteAnimals)
//(4) ["blowfish", "meerkat", "capricorn", "turtle"]
 

favoriteAnimals.indexOf("meerkat")
//1
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf("meerkat"))
//The item you are looking for is at index: 1