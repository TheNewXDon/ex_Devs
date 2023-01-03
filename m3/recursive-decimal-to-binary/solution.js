// function to convert decimal numbers to binary
function toBinary (number) {
    result = [];
    if (number == 0)
        return;
    else {
        toBinary(parseInt(number / 2));
        digit = new String (number % 2);
        result.push(digit);
        console.log(result.join(""));
    }
    return result.join("");
}

let text = prompt ("A positive integer")
while (text < 0)
    alert("ERROR! Digit a positive integer!")
alert(toBinary(parseInt(text)));