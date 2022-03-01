import path from 'path'

import * as fileHelper from '../helpers/file.js'

import { green } from '../helpers/colors.js'

import { capitalizeFirstLetter } from '../helpers/string.js'

import * as fileValidations from '../validations/file.js'

export async function makeController (args) {
  try {
    const fileDirectories = args[0].split('/')
    const controllerName = capitalizeFirstLetter(fileDirectories[fileDirectories.length - 1]).trim()

    const controllersPath = path.resolve(`src/controllers/${fileDirectories.slice(1).join('/')}`)
    const controllerToCreate = controllersPath + `/${controllerName}.ts`

    fileValidations.validateFileName(controllerToCreate, controllerName, 'controllers')

    const controllerTemplate = fileHelper.getTemplate('controller')

    fileHelper.createFile(controllersPath, controllerName, controllerTemplate, {
      controllerName
    })

    console.log(green(`Controller \"${controllerName}\" created!`))
  } catch (error) {
    console.log(error)
  }

  process.exit()
}
