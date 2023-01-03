let arrValues = [];
function isNum(n) {
    if (n <= 0 || n > 0)
        return true;
        else
            return false;
}
let value = parseInt(prompt ("write some values"));
arrValues.push(value);
while (isNum(value) == true) {
    value = parseInt(prompt ("write some values"));
    if (isNum(value) == true)
        arrValues.push(value);
    console.log(arrValues);
    console.log(value);
}

function recursive(array, position, sum) {
    sum += array[position];
    if (position == array.length - 1) {
        return sum
    } else {
        return recursive(array, position + 1, sum)
    }
        

}
console.log(recursive(arrValues, 0, 0));
alert("The sum of " + arrValues + " is " + (recursive(arrValues, 0, 0)));

