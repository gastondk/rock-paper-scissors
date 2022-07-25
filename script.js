/// get random element from array

let myArray = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    let randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}
