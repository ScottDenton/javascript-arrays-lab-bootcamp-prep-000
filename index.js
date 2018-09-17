// Add your functions and code here
 var kittens =["Milo", "Otis", "Garfield"]
 
 function destructivelyAppendKitten(name){
<<<<<<< HEAD
 kittens.push(name);
 }
 
 function destructivelyPrependKitten (name) {
   kittens.unshift(name);
 }
 
 function destructivelyRemoveLastKitten() {
   kittens.pop();
 }
 
 function destructivelyRemoveFirstKitten(){
   kittens.shift();
 }
 
 
 
function appendKitten(name) {
  var newArray =[...kittens];
  newArray.push(name);
  return newArray;
    }
 
 function prependKitten(name) {
   var newArray = [...kittens];
   newArray.unshift(name);
   return newArray;
   
 }
 
 function removeLastKitten() {
   var newArray = [...kittens];
   newArray.pop();
   return newArray;
   
 }
 
 function removeFirstKitten() {
   var newArray= [...kittens];
   newArray.shift();
   return newArray;
 }
 
 
=======
 kittens.append(name);
 }
>>>>>>> 894337634759bbb4612f556a06f5ffa2b25f93c2
