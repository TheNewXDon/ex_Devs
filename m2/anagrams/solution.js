let inputOne = prompt ('Write what you want')
let inputTwo = prompt ('An other time')

function anagrams(one, two) {
    arrOne = one.split('')
    arrTwo = two.split('')
    if (arrOne.length == arrTwo.length) {
        for (i = 0 ; i < arrOne.length; i++) {
            result = []
            result.push(arrOne.includes(arrTwo[i]))
        }
        if (result.includes(false)) {
            return "I'm sorry, not an anagram"
        } else {
            return "Wow, an anagram!"
        }
    } else {
        return "I'm sorry, not an anagram"
    }
        
}

alert(anagrams(inputOne, inputTwo))