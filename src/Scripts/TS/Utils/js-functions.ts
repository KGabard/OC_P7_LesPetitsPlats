export const capitalizeFirstLetter = (string: string) => {
  string = string[0].toUpperCase() + string.substring(1).toLocaleLowerCase()
  return string
}
