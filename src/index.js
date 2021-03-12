module.exports = function toReadable (number) {
    const numWords = require('num-words')
    let res = numWords(number)
    let str = res.split(' ')
    for (var i = str.length; i--;) {
        if (str[i] === 'and') {
            str.splice(i, 1);
        }
    }

    return str.join(' ')
}

