const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayOfTens = expr.match(/.{1,10}/g) // делаем из строки массив с элементами по 10 символов
    let result = ''
    let arrayOfMorse = []

    for (let i = 0; i < arrayOfTens.length; i++) {
        if (arrayOfTens[i] === '**********') { // проверяем если элемент массива является строкой с **********, то пушим в массив пробел
            arrayOfMorse.push(' ')
        } else { // если нет, делим элемент из 10 символов по два символа
            let arrayOfTwo = arrayOfTens[i].match(/.{1,2}/g)
            let morseStr = ''
            for (let j = 0; j < arrayOfTwo.length; j++) { // проверяем, если два символа равны 10, добавляем к строке точку, если нет, добавялем тире
                if (arrayOfTwo[j] === '10') {
                    morseStr = morseStr + '.'
                } else if (arrayOfTwo[j] === '11') {
                    morseStr = morseStr + '-'
                }
            }
            arrayOfMorse.push(morseStr) // пушим в массив тире и точки
        }
    }
    // теперь массив готов, далее перебираем его, и в результирующую строку добавляем значения
    for (let z = 0; z < arrayOfMorse.length; z++) {
        for (let keysAndValues of Object.entries(MORSE_TABLE)) {
            if (arrayOfMorse[z] === keysAndValues[0]) {
                result = result + keysAndValues[1]
            } else if (arrayOfMorse[z] === ' ') {
                result = result + ' '
                break
            }
        }
    }
    return result
};

module.exports = {
    decode
}
