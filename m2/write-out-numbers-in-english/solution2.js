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
    
    for (x of num) {
        for (i = 0; i < Object.keys(objNum).length; i++) {
            if (x == Object.keys(objNum)[i]) {
                    if (num.length == 3) {
                        if (num[0] == num[1] && num[0] == num[2]) {
                            if (output.length == 4) {
                                continue
                            } else {
                                output.push(Object.values(objNum)[i][0])
                                output.push('hundred')
                                output.push(Object.values(objNum)[i][1])
                                output.push(Object.values(objNum)[i][0])
                            }                                                      // I write a condition for each case
                        } else if (num[0] == num[1]) {
                            if (output.length == 4) {
                                break
                            } else {
                                output.push(Object.values(objNum)[i][0])
                                output.push('hundred')
                                if (num[1] > 1 && x <= 9) {
                                    output.push(Object.values(objNum)[Object.keys(objNum).indexOf(num[1])][1])
                                } else if (num[1] == 1 && num[2] == 0) {
                                    output.push(Object.values(objNum)[Object.keys(objNum).indexOf(num[1])][1])
                                } else if (num[1] == 1 && num[2] != 0) {
                                    output.push(Object.values(objNum)[Object.keys(objNum).indexOf(num[1])][2])
                                } else if (x == 0) {
                                    break
                                }
                                    output.push(Object.values(objNum)[i][1])
                                    output.push(Object.values(objNum)[Object.keys(objNum).indexOf(num[2])][0])
                            }

                        } else if (num[0] == num[2]) {
                            if (output.length == 4) {
                                continue
                            } else {
                                output.push(Object.values(objNum)[i][0])
                                output.push('hundred')
                                output.push(Object.values(objNum)[Object.keys(objNum).indexOf(num[1])][1])
                                output.push(Object.values(objNum)[i][0])
                            }
                        } else if (num.indexOf(x) == 0) {
                            if (output.includes('hundred')) {
                                break
                            } else {
                                output.push(Object.values(objNum)[i][0])
                                output.push('hundred')
                            }
                                                              // if number has 3 digits then I add 'hundred' after the first one
                        } else if (num.indexOf(x) == 1) {
                            if (x > 1 && x <= 9) {
                                output.push(Object.values(objNum)[i][1])
                            } else if (x == 1 && num[2] == 0) {
                                output.push(Object.values(objNum)[i][1])
                            } else if (x == 1 && num[2] != 0) {
                                output.push(Object.values(objNum)[i][2])
                            } else if (x == 0) {
                                break
                            }
                        } else if (num.indexOf(x) == 2) {
                            if (x == 0 || num[1] == 1) {
                                break // or continue
                            } else {
                                output.push(Object.values(objNum)[i][0])
                            }
                        }
                    } else if (num.length == 2) {
                        if (num.indexOf(x) == 0) {
                            if (x != 1) {
                                output.push(Object.values(objNum)[i][1])
                            } else if (x == 1 && num[2] == 0) {
                                output.push(Object.values(objNum)[i][1])
                            } else if (x == 1 && num[2] != 0) {
                                output.push(Object.values(objNum)[i][2])
                            }
                        } else if (num.indexOf(x) == 1) {
                            if (x == 0 || num[1] == 1) {
                                break // or continue
                            } else {
                                output.push(Object.values(objNum)[i][0])
                            }
                        }
                    } else if (num.length == 1) {
                        output.push(Object.values(objNum)[i][0])
                    } 
            }
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
