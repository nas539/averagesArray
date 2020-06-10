const arrayOne = [1, 4, 6, 9];
const arrayTwo = [154, 546, 36, 92];
const arrayThree = [11, 4926, 27, 3, 72];

const add = (a, b) => a + b

const getAverage = someArray => {
    return someArray.reduce(add) / someArray.length
}

getAverage(arrayOne);
getAverage(arrayTwo);
getAverage(arrayThree);



