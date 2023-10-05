function sumSequence(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / Math.pow(2, i);
    }
    return sum.toFixed(2);
}

function mergeArrays(arr) {
    return [...arguments].flat();
}

function isPalindrome(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

function countLetters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    delete charCount[" "];
    return charCount;
}

function divideArrays(arr, size) {
    if (size < 1) return [];
    if (size >= arr.length) return [arr];

    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i += size;
    }
    return result;
}

function encrypt(str, n) {
    if (n <= 0) return str;

    function shiftChar(char, shift) {
        const charCode = char.charCodeAt(0);
        let shiftedCharCode = charCode + shift;

        if (charCode >= 65 && charCode <= 90) {
            while (shiftedCharCode < 65) {
                shiftedCharCode += 26;
            }
            while (shiftedCharCode > 90) {
                shiftedCharCode -= 26;
            }
        }

        return String.fromCharCode(shiftedCharCode);
    }

    let encryptedStr = "";
    for (let char of str) {
        encryptedStr += shiftChar(char, -n);
    }

    return encryptedStr;
}
