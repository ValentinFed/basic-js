const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    let count = 0
    const matrixFilter = matrix.map(openMatrix => openMatrix.filter(item => item === '^^'))
    matrixFilter.map(arrays => count += arrays.length)

    return count
};
