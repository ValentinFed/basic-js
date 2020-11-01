const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)) {
    throw new Error('The arr is not an Array')
  }

  console.log(arr)
};
