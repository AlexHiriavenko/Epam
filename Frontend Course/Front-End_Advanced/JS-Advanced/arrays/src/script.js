function addNumber(arr, number) {
    if (number) {
        number > 0 ? arr.unshift(number) : arr.push(number);
    }
    return arr;
}

function compareArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function getNumberOfEven(arr) {
    return arr.reduce((acc, next) => (acc += next % 2 === 0 ? 1 : 0), 0);
}

function getSubarray(arr, data) {
    const index = arr.indexOf(data);
    if (index !== -1) {
        arr.length = index + 1;
        return arr;
    }
    return [];
}

function getDuplicateValues(arr) {
    let res = [];

    arr.forEach((el, i) => {
        if (i !== arr.indexOf(el)) {
            res.push(el);
        }
    });
    return [...new Set(res)];
}

function getMaxNumbers(arr) {
    return arr.reduce((acc, next) => {
        acc.push(Math.max(...next));
        return acc;
    }, []);
}
