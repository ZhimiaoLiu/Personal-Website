// src/data/galleries.js
const modules08 = import.meta.glob(
  '../assets/photos/2026-08/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
)
const modules10 = import.meta.glob(
  '../assets/photos/2026-10/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
)

// 可选：给某几张写说明，key 用文件名，没写的就没有 caption
const captions = {
  'IMG_4036.jpg': 'Tyy送的花',
  'IMG_4036.jpg': '好可爱的kagami',
  'IMG_4054.jpg': '自拍',
}

export const aug2026 = Object.entries(modules08)
  .sort(([a], [b]) => a.localeCompare(b))   // 靠文件名 01/02/03 排序
  .map(([path, src]) => {
    const name = path.split('/').pop()
    return { src, caption: captions[name] }
  })

export const oct2026 = Object.entries(modules10)
  .sort(([a], [b]) => a.localeCompare(b))   // 靠文件名 01/02/03 排序
  .map(([path, src]) => {
    const name = path.split('/').pop()
    return { src, caption: captions[name] }
  })