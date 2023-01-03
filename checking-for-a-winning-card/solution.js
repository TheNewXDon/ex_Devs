// I create an object called bingoCard in which I put the values (15 range rumbers in each key)


// I create the function that fill bingoCard with five numbers of a 15 range
function createCard() {
    const bingoCard = {
        'B': [],
        'I': [], 
        'N': [], 
        'G': [], 
        'O': []
    }
    iRange = 15;
    range = Math.floor(Math.random() * iRange) + 1;
    function number() {
// a for loop in order to fill the keys of bingoCard
        for (x in bingoCard) {
            if (bingoCard[x].includes(range) == false) {
// until each key.length reach I will push a random number
                if (bingoCard[x].length != 5) {
                    bingoCard[x].push(range)
                    for (i = 0; i < 100; i++) {
// in some cases there was a bug that assigned undefined to the last values of the keys and I solved it with this
                        if (bingoCard[x][4] == undefined) {
                            bingoCard[x].pop()
                            bingoCard[x].push(range);
                            break   
                        }
                    } 
                } else {
                    break;
                }    
            }
// at the end of the loop I change numbers condition     
            iRange = + 15;
            range = (range) + 15;
        }
    }
// I repeat the process until I reach the condition for each key
    for (i = 1; i <= 6; i++) {
        iRange = 15;
        range = Math.floor(Math.random() * iRange) + 1;
        number()
    }
    return bingoCard
}

// now I'm focusing on the table creation [not so simple]
function tableCard(card) {
    keys = Object.keys(card)
    values = Object.values(card)
    const body = document.body;
    const tbl = document.createElement('table');
    tbl.style.display = 'inline-block'
    tbl.style.width = '10%';
    tbl.style.height = '50 %';
    tbl.style.border = '1px solid black';
    tbl.style.margin = '25px';
    tbl.style.padding = '25 px';
    const tr = tbl.insertRow();
    for (let y = 0; y < 5; y++) {
        const td = tr.insertCell();
        td.innerHTML = Object.keys(card)[y];
        td.style.border = '1px solid black';
        td.style.backgroundColor = 'yellow'; 
    }
    for (let i = 0; i < 5; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < 5; j++) {
            if (i === 4 && j === 4) {
                const td = tr.insertCell();
                if (Object.values(card)[i][j] != undefined) 
                    td.innerHTML = Object.values(card)[j][i];
                td.style.border = '1px solid black';
                td.style.width = '8%';
                td.style.height = '15%';
                td.style.backgroundColor = 'pink';
                if (i === 1 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '2');
                } else if (i === 2 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '3')
                } else if (i === 3 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '4')
                } else if (i === 4 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '5')
                }
                break;
            } else {
                const td = tr.insertCell();
                if (Object.values(card)[i][j] != undefined)
                    td.innerHTML = values[j][i];
                td.style.border = '1px solid black';
                td.style.width = '8%';
                td.style.height = '15%';
                td.style.backgroundColor = 'pink';
                if (i === 1 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '2');
                } else if (i === 2 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '3')
                } else if (i === 3 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '4')
                } else if (i === 4 && document.getElementsByTagName('td').length === 5) {
                    td.setAttribute('rowSpan', '5')
                }
            }
        }
    }
    body.appendChild(tbl)
}
let cell = document.getElementsByTagName('td')

function checkWin() {
    function myFunction(value) {
        return value == 'X';
    }
    for (let counter = 0; counter < 30; counter++) {
        tableCard(createCard());
        const lines = {
            firstRow: [],
            secRow: [],
            thirdRow: [],
            fourthRow: [],
            fifthRow: [],
            firstCol: [],
            secCol: [],
            thirdCol: [],
            fourthCol: [],
            fifthCol: [],
            firstDiag: [],
            secDiag: []
        }
        let vval = Object.values(lines);
        let kkeys = Object.keys(lines);
        for (index = 5; index <= 29; index++) {
            if (index < 10)
                lines.firstRow.push(cell[index].innerHTML)
            if (index >= 10 && index < 15)
                lines.secRow.push(cell[index].innerHTML)
            if (index >= 15 && index < 20)
                lines.thirdRow.push(cell[index].innerHTML)
            if (index >= 20 && index < 25)
                lines.fourthRow.push(cell[index].innerHTML)
            if (index >= 25 && index < 30)
                lines.fifthRow.push(cell[index].innerHTML)
            if (lines.fifthRow.length == 5) {
                console.log(lines)
            }
        }
        // I declare out of the loop an other variable for the index of each Row
        let ind = 0;
        // here the for loop which I fill the Columns arrays with
        for (let q = 5; q <= 9; q++) {
            console.log(vval.indexOf(lines.fourthCol))
            for (let c = 0; c < 5; c++) {
                vval[q].push(vval[c][ind])
                if (vval[q].length == 5) {
                    ind++
                }
            }
        }
    
        let o = 4;
        // now I create the for loop to fill the Diagonals arrays
        for (c = 0; c < 5; c++) {
            vval[10].push(vval[c][c]);
            vval[11].push(vval[c][o]);
            o--;
            if (vval[11].length == 5) {
                break;
            }
        }
    }
    //-----> we did a great job! It remains to check this fucking winning card. We didn't read the bingo Rules 

    const winningNums = [];
    for (i = 0; i < 50; i++) {
        let winNum = Math.floor(Math.random() * 75) + 1;
        winningNums.push(winNum);            
    }
    // I start a loop for any td inside HTML. If the content of that td is equal to a winningNums I replace the content with one X
    console.log(cell.length)
    for (k = 0; k < cell.length; k++) {
        for (l = 0; l < winningNums.length; l++) {
            console.log(cell[k].innerHTML)
            if (cell[k].innerHTML == winningNums[l])
                cell[k].innerHTML = 'X';
        }
    }
    
}
alert(checkWin())


// I think this is a winning
