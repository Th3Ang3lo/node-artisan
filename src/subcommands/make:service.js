import path from 'path'

import * as fileHelper from '../helpers/file.js'

import { green } from '../helpers/colors.js'

import * as stringHelper from '../helpers/string.js'

import * as fileValidations from '../validations/file.js'

export async function makeService (args) {
  try {
    const fileDirectories = args[0].split('/')
    const serviceName = stringHelper.capitalizeFirstLetter((fileDirectories[fileDirectories.length - 1]).trim())
    fileDirectories.pop()

    const servicesPath = path.resolve(`src/services/${fileDirectories.join('/')}`)
    const controllerToCreate = servicesPath + `/${serviceName}.ts`

    fileValidations.validateFileName(controllerToCreate, serviceName, 'services')

    const serviceTemplate = fileHelper.getTemplate('service')

    fileHelper.createFile(servicesPath, serviceName, serviceTemplate, {
      serviceName: serviceName
    })

    console.log(green(`Service \"${serviceName}\" created!`))
  } catch (error) {
    console.log(error)
  }

  process.exit()
}
