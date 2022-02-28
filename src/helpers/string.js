export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const stringStartsWithNumber = string => {
  return match(new RegExp(/^\d/)) !== null
}
