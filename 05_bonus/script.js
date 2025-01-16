/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

let date = new Date
// console.log(date)

let hour = date.getHours();
// console.log(hour)


// Dichiara la funzione qui.
function salutoUserName(parola2) {

    let res = (hour <= 13) ? "Buongiorno " + (parola2) :
                (hour <= 17) ? "Buon pomeriggio " + (parola2):
                (hour > 17) ? "Buonasera " + (parola2): "";
        console.log(res)

    return parola2;
}

// Invoca la funzione qui e stampa il risultato in console
(salutoUserName(name))





//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.