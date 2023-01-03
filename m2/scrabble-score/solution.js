function scrabbleScore (word) {
    // I'm going to create a function that calculate the scrabble score of a world. First step, an object
    const objPoints = {
        1:	['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
        2:	['D', 'G'],
        3:	['B', 'C', 'M', 'P'],
        4:	['F', 'H', 'V', 'W', 'Y'],
        5:	['K'],
        8:	['J', 'X'],
        10:	['Q', 'Z']
    }
    keys = Object.keys(objPoints)
    values = Object.values(objPoints)
    const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = word.replace(regex, '');         // removing all the punctuation marks
    let letters = result.toUpperCase();               // equalizing all the characters
    console.log(letters);
    let score = 0;
    points = [];
    for (x of letters) {                            // this is a for loop which I am going to find the respective key of the letter and adding the key value (the point) as next step
        for (i = 0; i < keys.length; i++) {
            if (values[i].includes(x)) {
                points.push(keys[i]);
            }
        }
    }

    function sum (total, value, index, array) {     // here a little function to convert string into numbers and so making the sum
        return parseInt(total) + parseInt(value)
    }
    return points.reduce(sum)
}

let word = prompt('Write a word')
alert('The Scrabble score of your word is ' + scrabbleScore(word))