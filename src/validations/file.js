import fs from 'fs'

import { red } from '../helpers/colors.js'

import * as stringUtils from '../helpers/string.js'

export const validateFileName = (filePath, fileName, fileType) => {
  if(!fileName) throw red(`OPS! Please, inform your ${fileType} name.`)

  if(stringUtils.containsSpecialChars(fileName)) throw red('OPS! The file can\'t have special chars.')

  if (stringUtils.stringStartsWithNumber(fileName)) throw red('OPS! The file starts with number.')

  if (fs.existsSync(filePath)) throw red(`OPS! The ${fileType} already exists.`)
}
