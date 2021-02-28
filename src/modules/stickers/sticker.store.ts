const stickers = [
  '/assets/stickers/01.png',
  '/assets/stickers/02.png',
  '/assets/stickers/03.png',
  '/assets/stickers/04.png',
  '/assets/stickers/05.png',
  '/assets/stickers/06.png',
  '/assets/stickers/07.png',
  '/assets/stickers/08.png',
  '/assets/stickers/09.png',
  '/assets/stickers/10.png',
  '/assets/stickers/11.png',
  '/assets/stickers/12.png',
  '/assets/stickers/13.png',
  '/assets/stickers/14.png',
  '/assets/stickers/15.png',
  '/assets/stickers/16.png',
]

export function getRandomSticker() {
  const index = Math.floor(Math.random() * Math.floor(stickers.length - 1))

  return stickers[index]
}
