module.exports = function toReadable (num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

    var numStr = num.toString();

    if (num === 0) {
        return 'zero';
    }

    if (num < 20) {
        return ones[num];
    }

    if (numStr.length === 2) {
        if (ones[numStr[1]] !== '')
            return tens[numStr[0]] + ' ' + ones[numStr[1]];
        else
            return tens[numStr[0]];
    }

    if (numStr.length == 3) {
        if (numStr[1] === '0' && numStr[2] === '0')
            return ones[numStr[0]] + ' hundred';
        else
            return ones[numStr[0]] + ' hundred ' + toReadable(+(numStr[1] + numStr[2]));
  }
}