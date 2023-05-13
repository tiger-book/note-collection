const fs = require('fs')
const path = require('path')

console.log(path.resolve(__dirname))
const readDir = fs.readdirSync('./')
console.log(readDir)
const result = readDir
  .filter((item) => item.includes('.md'))
  .filter((item) => item !== 'index.md')
  .map((item) => {
    const text = item.split('.md')[0]
    return {
      text,
      link: `/typora/00summary/${item}`,
    }
  })
console.log(result)
