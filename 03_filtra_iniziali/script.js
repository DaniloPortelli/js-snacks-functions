/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con 
quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];




// Dichiara la funzione qui.
function findFirstLetter(array){
    for (let i = 0; i < array.length; i++){
      let singleName = array[i]
    //   console.log(singleName)
    
      let letter = singleName.charAt(0);
    //   console.log(letter)

        if (letter === "A"){
        let singleNameToString = singleName.split()
        console.log(singleNameToString)
        }
    }
    return findFirstLetter
}

// Invoca la funzione qui e stampa il risultato in console
findFirstLetter(names)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]