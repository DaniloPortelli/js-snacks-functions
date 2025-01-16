/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo 
un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function findFirstLetter(array){
    for (let i = 0; i < array.length; i++){
      let singleName = array[i]
    //   console.log(singleName)
    
      let letter = singleName.charAt(0);
    //   console.log(letter)

      let string = letter.split()
      console.log(string)
    }
    return findFirstLetter
}


// Invoca la funzione qui e stampa il risultato in console
(findFirstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]