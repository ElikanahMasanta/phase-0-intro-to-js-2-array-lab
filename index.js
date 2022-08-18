// Write your solution here!var cats = ["Milo", "Garfield", "Otis"]
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
   }

   function destructivelyprependCat(name){
      cats.prepend(name)
    return cats
   }
    function destructivelyRemoveLastCat(name){
        cats.pop(name)
        return cats
    } 

    function destructivelyRemoveFirstCat(name){
        cats.slice(-2)
        return cats
    }