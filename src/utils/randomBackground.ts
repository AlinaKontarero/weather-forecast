export const setRandomBackground = (): string => {
  const backgrounds = ['Green', 'Violet', 'Blue']
  const bgIndex = Math.floor(Math.random() * backgrounds.length)
  const randomBackground = backgrounds[bgIndex]
  return `../assets/${randomBackground}.jpg`
}