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
                if (num.length == 3 && x == num[0]) {                   
                    if (output.includes('hundred')){                        //if output already includes hundred then skip the following instruction
                        continue
                    } else {
                        output.push(Object.values(objNum)[i][0])            //if num is 117 after 1 I add hundred
                        output.push('hundred')
                        console.log(Object.values(objNum)[i][0])
                        continue
                    }
                                
                } else if (num.length == 3 && x == num[1]) {            //I add forty because 4 is as decimal
                    if (x == '1' && num[2] == '0' || x > 1 && x < 10) {     // I add condition when 1 is as decimal
                        output.push(Object.values(objNum)[i][1])
                        console.log(output.push(Object.values(objNum)[i][1]))       // I stopped here[...] There is a problem in my code and I think that it is here
                    } else if (x == '1' && num[2] != '0') {
                        continue
                    } else if (num[1] == '0' && num[2] == '0') {
                        continue
                    }
                } else if (num.length == 3 && x == num[2]) {            //if as decimal was 1 I add teen
                    if (num[1] == '1') {
                        output.push(Object.values(objNum)[i][2]) 
                    } else if (num[1] == 0){
                        output.push(Object.values(objNum)[i][0])
                    }
                } else if (num.length == 2 && x == num[0]) {
                    output.push(Object.values(objNum)[i][1])
                } else if (num.length == 2 && x == num[1]) {
                    if (x != 0) {
                        output.push(Object.values(objNum)[i][0])
                    } else {
                        continue
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