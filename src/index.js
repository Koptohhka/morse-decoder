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

function decode(str) {
    const DECODE_MAP = {
        11: '-',
        10: '.',
        '**********': ' '
    }

    let decodedStr = '';
    //Алгоритм старт
    let testArr = [];
    let strMultiply = str.length / 10;    

    for (let j = 0; j < strMultiply; j++) {
        let testVarr = j * 10;
        let secondTestVarr = testVarr + 10;        

        testArr.push([]);
        testArr[j].push('');

        for (let i = testVarr; i < secondTestVarr; i += 2) {
            if (DECODE_MAP[(str[i] + str[i + 1])]) {
                testArr[j] += DECODE_MAP[(str[i] + str[i + 1])];
            }
        }
    }

    testArr.forEach((it) => {
        if (MORSE_TABLE[it]) {
            decodedStr += MORSE_TABLE[it];
        } else {
            decodedStr += ' ';
        }
    })

    //Алгоритм конец

    return decodedStr;
}

module.exports = {
    decode
}