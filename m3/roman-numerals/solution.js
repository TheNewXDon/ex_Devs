// given a roman numeral in input by the user, convert it in a decimal number

function toDecimal(input) {
    romanNum = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    let result = 0;
    // normal solution
    for (let i = 0; i < input.length; i++) {
        let valOne = romanNum[input.charAt(i)];
        let valTwo = 0;
        if (i < input.length - 1) {
            valTwo = romanNum[input.charAt(i + 1)];
        }
        if (valTwo > valOne) {
            result -= valOne;
        } else {
            result += valOne;
        }
    }
    return result;
}
let index = 0;

function toDecimalRecursive(input, result) {
    romanNum = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    char = input[index];
    charNext = input[index+1];
    
    if (input.length > 1){
        if (romanNum[char] >= romanNum[charNext]) {
            result += romanNum[char];
            console.log("char: " + char + "\nromanNum[char]: " + romanNum[char] + "\nresult: " + result)
            return toDecimalRecursive(input.slice(index+1), result)
        } else if (romanNum[char] < romanNum[charNext]) {
            result -= romanNum[char];
            console.log("char: " + char + "\nromanNum[char]: " + romanNum[char] + "\nresult: " + result)
            return toDecimalRecursive(input.slice(1), result)
        }    
    } else {
        result += romanNum[char];
        return result;
    }
    
    
    // nothing to do bro, this recursive function is harder than I could expected, we'll try again tomorrow, good job!


}

let input = prompt("Write a roman number");
alert(toDecimalRecursive(input.split(""), 0));


/*prendendo come esempio i numeri romani MMXXII e MCMXCVIII, considerando
l'ordine delle lettere che sono in ordine decrescente per il primo numero, 
il sistema da usare sarà {creare una variabile risultato in cui aggiungere
i valori dei caratteri, prendere in considerazione ciascun carattere (char),
confrontarlo con le chiavi contenute nell'oggetto designato(romanNum), 
sommare a risultato il valore corrispondente alla chiave, infine stampare}
Semplice e chiaro. Ora invece per quanto riguarda il secondo numero, ci sarà
un po' più da ragionare: {prendere in considerazione ciascun carattere (char)
e fare il confronto, SE il carattere successivo a quello preso in considerazione
è maggiore (char1 > char0 --> IX --> X > I) ALLORA sottraiamo il valore del 
carattere preso in considerazione (MCMX --> M = 1000, C = 100, res += 1000;
C = 100, M = 1000, res -= 100, res == 900; M = 1000, X = 10, res += 1000[...]}
Okay, direi che abbiamo capito.) 
*/
