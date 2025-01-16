/* Scrivi una funzione che accetti una stringa e restituisca
 il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function findVocal(parola){
    for (let i = 0; i < parola.length; i++){
      let singleWord = parola[i]
    //   console.log(singleName)
    let res = (singleWord === "a") ? "a":
                (singleWord === "e") ? "e":
                (singleWord === "i") ? "i":
                (singleWord === "o") ? "o":
                (singleWord === "u") ? "u" : "";
        console.log(res)
    }
    return findVocal
}

// Invoca la funzione qui e stampa il risultato in console
findVocal(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)