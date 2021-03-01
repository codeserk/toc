import { addIcons } from 'ionicons'
import * as icons from 'ionicons/icons'
import { camelCaseToKebapCase } from './utils/string'

const list = Object.entries(icons).reduce((result, [key, icon]) => {
  result[camelCaseToKebapCase(key)] = icon

  return result
}, {})

addIcons(list)
