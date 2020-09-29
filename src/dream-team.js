const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretArray = [];
  if (!Array.isArray(members)) {
    return false
  }
  for (i=0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      firstElement = members[i].trim()[0].toUpperCase();
      secretArray.push(firstElement);
    }
  }
  return secretArray.sort().join('');

};