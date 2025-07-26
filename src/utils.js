export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function randomMessage() {
  const abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
  let newAbc = ''
  while (newAbc.length <= 10) {
    const index = random(0, abc.length - 1)
    newAbc += abc[index].toLocaleUpperCase()
  }
  return newAbc
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
