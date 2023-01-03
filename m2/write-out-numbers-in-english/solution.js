// I have to write a function that convert numbers into their respective english word

function converterNum(num) {
    const objNum = {
        '0': 'zero',
        '1': ['one','ten','eleven'],
        '2': ['two','twenty','twelve'],
        '3': ['three', 'thirty','thirteen'],
        '4': ['four', 'forty', 'fourteen'],
        '5': ['five', 'fifty', 'fifteen'],
        '6': ['six', 'sixty', 'sixteen'],                                         
        '7': ['seven', 'seventy', 'seventeen'],
        '8': ['eight', 'eighty', 'eighteen'],
        '9': ['nine', 'ninety', 'nineteen']
    }
    const output = [];

    // I start a loop convert keys into values
    keys = Object.keys(objNum)
    values = Object.values(objNum)
        if (num.length == 3) {
          if (num[0] == num[1] && num[0] == num[2]) {
                output.push(values[num[0]][0])
                output.push('hundred')
                if (num[1] == 1) {
                    output.push(values[num[0]][2])
                } else {
                    output.push(values[num[0]][1])
                    output.push(values[num[0]][0])
                }                                                  // I write a condition for each case
            } else if (num[0] == num[1]) {
                output.push(values[num[0]][0])
                output.push('hundred')
                if (num[1] > 1 && num[1] <= 9) {
                    output.push(values[keys.indexOf(num[1])][1])
                    output.push(values[keys.indexOf(num[2])][0])
                } else if (num[1] == 1 && num[2] == 0) {
                    output.push(values[keys.indexOf(num[1])][1])
                } else if (num[1] == 1 && num[2] != 0) {
                    output.push(values[keys.indexOf(num[1])][2])
                } else if (num[1] == 0) {
                    output.push(values[keys.indexOf(num[2])][0])
                }
            } else if (num[0] == num[2]) {
                    output.push(values[keys.indexOf(num[0])][0])
                    output.push('hundred')
                    if (num[1] > 1 && num[1] <= 9) {
                        output.push(values[keys.indexOf(num[1])][1])
                        output.push(values[keys.indexOf(num[0])][0])
                    } else if (num[1] == 1 && num[2] != 0) {
                        output.push(values[keys.indexOf(num[0])][2])
                    } else if (num[1] == 0) {
                        output.push(values[keys.indexOf(num[0])][0])
                    }
            } else {
                output.push(values[keys.indexOf(num[0])][0])
                output.push('hundred')
                if (num[1] > 1 && num[1] <= 9) {
                    output.push(values[keys.indexOf(num[1])][1])
                    output.push(values[keys.indexOf(num[2])][0])
                } else if (num[1] == 1 && num[2] != 0) {
                    output.push(values[keys.indexOf(num[2])][2])
                } else if (num[1] == 0) {
                    if (num[2] == 0) {
                        console.log('hello')
                    } else {
                        output.push(values[keys.indexOf(num[2])][0])
                    }
                }
            }                                                  // if number has 3 digits then I add 'hundred' after the first one
        } else if (num.length == 2) {
            if (num[0] > 1 && num[0] <= 9) {
                output.push(values[num[0]][1])
                if (num[1] == 0) {
                    console.log('hello')
                } else {
                    output.push(values[num[1]][0])
                }
            } else if (num[0] == 1 && num[1] == 0) {
                output.push(values[num[0]][1])
            } else if (num[0] == 1 && num[1] != 0) {
                output.push(values[num[1]][2])
            }
        } else if (num.length == 1) {
            if (num != 0) {
                output.push(values[num[0]][0])
            } else {
                output.push(values[num])
            }
            
        }
    console.log(output)
    return output.join(' ')
}

let text = prompt('write a number between 0 and 999')
if (text < 0 || text > 999) {
    while (text < 0 || text > 999) {
        text = prompt('I said a number between 0 and 999')
    }
}
alert(converterNum(text))
