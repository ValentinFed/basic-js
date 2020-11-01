const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {

  if(!Array.isArray(members)) {
    return false
  }

  const membersSort =  members.filter(item => typeof item === 'string')
  const teamName = membersSort.map(item => item.replace(/ +/g, "").split('')[0].toUpperCase())
  return  teamName.sort().join('')

};
