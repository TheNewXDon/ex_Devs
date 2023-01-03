// I create an object with five keys
const bingoCard = {
    'B': [],
    'I': [], 
    'N': [], 
    'G': [], 
    'O': []
}
let keys = Object.keys(bingoCard)
let values = Object.values(bingoCard)
// I create a function that stores in each key of the object a value (a 15 range number)

function createCard(obj) {
    iRange = 15
    range = Math.floor(Math.random() * iRange) + 1;
    function number() {
        for (x in obj) {
            if (obj[x].includes(range) == false) {
                if (obj[x].length != 5) {
                    obj[x].push(range)
                }
            }     
            iRange = + 15;
            range = (range) + 15;
        }
    }
    for (i = 1; i <= 4; i++) {
        iRange = 15;
        range = Math.floor(Math.random() * iRange) + 1;
        number()
    }
    
    return Object.entries(obj)
}
function tableDisplay() {
    document.getElementById('B').innerHTML = keys[0]
    document.getElementById('I').innerHTML = keys[1]
    document.getElementById('N').innerHTML = keys[2]
    document.getElementById('G').innerHTML = keys[3]
    document.getElementById('O').innerHTML = keys[4]
    for (i = 0; i < 5; i++) {
        document.getElementsByTagName('td')[i].innerHTML = values[i][0]
        
    }
    for (i = 0; i < 5; i++) {
        let td = document.createElement('td')
        td.innerHTML = values[i][1]
        document.getElementById('secondR').append(td)
    }
    for (i = 0; i < 5; i++) {
        let td = document.createElement('td')
        td.innerHTML = values[i][2]
        document.getElementById('thirdR').append(td)
    }
    for (i = 0; i < 5; i++) {
        let td = document.createElement('td')
        td.innerHTML = values[i][3]
        document.getElementById('fourthR').append(td)
    }
    for (i = 0; i < 5; i++) {
        let td = document.createElement('td')
        td.innerHTML = values[i][4]
        document.getElementById('fifthR').append(td)
    }
        
}

console.log([createCard(bingoCard)])
alert(createCard(bingoCard))
tableDisplay()


// Done, but next time we'll do it better
