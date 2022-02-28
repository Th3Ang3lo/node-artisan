import fs from 'fs'

import controllerTemplate from '../templates/controller.js'

export const getFile = (fileName) => {
  return fs.readFileSync(fileName).toString()
}

export const createFile = (filePath, fileName, content, data) => {
  const fileToCreate = filePath + `/${fileName}.ts`

  for(const key in data) {
    content = content.replace('%' + key + '%', data[key])
  }

  fs.mkdirSync(filePath, { recursive: true })
  fs.writeFileSync(fileToCreate, content)
}

export const getTemplate = template => {
  switch (template) {
    case 'controller':
      return controllerTemplate
  }
}
