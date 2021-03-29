const CustomError = require("../extensions/custom-error");


  module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    let copyArr = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == `--discard-next`) {
        copyArr.push(undefined);
        i++;
      } else if (arr[i] == `--discard-prev`) {
        copyArr.pop();
      } else if (arr[i] == `--double-next`) {
        if (i + 1 < arr.length) {
          copyArr.push(arr[i + 1]);
        }
      } else if (arr[i] == `--double-prev`) {
        if (copyArr.length != 0) {
          copyArr.push(copyArr[copyArr.length - 1]);
        }
      } else {
        copyArr.push(arr[i]);
      }
    }
    let newArr = [];
    for (i = 0; i < copyArr.length; i++) {
      if (copyArr[i] != undefined) {
        newArr.push(copyArr[i]);
      }
    }
    return newArr;
  };