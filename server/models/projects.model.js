const getProjects = () => {
  return new Promise(function (resolve, reject) {
    resolve('hello world')
  })
}

exports.projects = {
  get: getProjects
}
