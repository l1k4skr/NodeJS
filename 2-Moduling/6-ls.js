const path = require('node:path')
const fs = require('node:fs/promises')

async function returnFiles(path) {
  const files = await fs.readdir(path)
  return files
}

returnFiles('.').then(element => {
  element.forEach(item => {
    console.log(item)
  }
  )
})
