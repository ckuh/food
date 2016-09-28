const fs = require('fs')

const getProjects = () => {
  return new Promise(function (resolve, reject) {
    const tempFile = '/../Resume_ChrisKuh.pdf'
    fs.readFile(__dirname + tempFile, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = {
  get: getProjects
}
