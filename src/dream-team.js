const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)) return false;
    let arr = [];
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        arr.push(members[i].trim().toUpperCase()[0]);
      };
    };
    arr = arr.sort().join("");
    return arr;
  }
