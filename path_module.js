const path = require('path')

console.log(path.sep)

const filePath = path.join('\content','inner','inventory.txt')
console.log(filePath)

const base = path.basename(filePath) //path.basename() method returns the last portion of a path
console.log(base)

const base_no_ext = path.basename(filePath, '.txt')
console.log(base_no_ext)

const absolute = path.resolve(__dirname, filePath)
console.log(`Absolute Path ${absolute}`)
