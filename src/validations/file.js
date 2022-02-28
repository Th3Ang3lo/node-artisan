import fs from 'fs'
import path from 'path'

import { red } from '../helpers/colors.js'

export const validateFileName = (filePath, fileName, fileType) => {
  if(!fileName) {
    throw red(`OPS! Please, inform your ${fileType} name.`)
  }

  if (fs.existsSync(filePath)) {
    throw red(`OPS! The ${fileType} already exists.`)
  }
}
