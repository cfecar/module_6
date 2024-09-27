//Задание 6.6.1
/*let string = "Сантимент";
function polydromeTest(str) {
    let letters = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            letters += str[i].toLowerCase()
        }
    }
    let invertedString = "";
    for (let k = letters.length - 1; k >= 0; k--) {
        invertedString += letters[k];
    }
    if (letters === invertedString) {
        return console.log(`Слово ${str} является палиндромом`)
    } else {
        return console.log(`Слово ${str} не является палиндромом`)
    }
}
console.log(polydromeTest(string))
//Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
let uniqueSet = new Set(arr);
let uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);
//Задание 6.6.3
let number = Number(prompt("Введите любое число"));
let arrayNumbers = [];
for (let i = 0; i <= number; i++) {
    arrayNumbers.push(i)
}
console.log(arrayNumbers)*/
//Задание 6.6.4
let ticTacToe = ["x", "o"];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
    for (let x = 0; x < 3; x++) {
        let str = "";
        for (let y = 4; y >= 0; y--) {
            if (y % 2 != 0) {
                str += " "
            } else {
                str += ticTacToe[getRandomIntInclusive(0,1)];
            }
        }
        console.log(str);
    }
    //Задание 6.6.5
    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
    let res = []
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            for (let i of obj[key]) {
                res.push(i)
            }
        } else {
            res.push(obj[key])
        }
    }
    console.log(res)



