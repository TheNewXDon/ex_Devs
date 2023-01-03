const res = prompt ('Write something');

const uniqueSet = new Set(res);
const backToArray = [...uniqueSet];
alert ('The unique characters are ' + backToArray.length);