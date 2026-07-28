import type { StaticImageData } from 'next/image'

import logo from '../images/Sooriya Sulanga logo.png'
import titleImg from '../images/Sooriya Sulanga Tittle (2).png'
import loadingBg from '../images/loadinBackground.jpg'
import poster from '../images/poster.jpeg'

import hero1 from '../images/hero/1.png'
import hero2 from '../images/hero/2.png'
import hero3 from '../images/hero/3.png'
import hero4 from '../images/hero/4.png'

import g1 from '../images/gallery1.PNG'
import g2 from '../images/gallery2.PNG'
import g3 from '../images/gallery3.PNG'
import g4 from '../images/gallery4.PNG'
import g5 from '../images/gallery5.PNG'
import g6 from '../images/gallery6.PNG'
import g7 from '../images/gallery7.PNG'
import g8 from '../images/gallery8.PNG'

import actor01 from '../images/actors/1-Megha Sooriyaarachchi.jpg'
import actor02 from '../images/actors/2-Nihari Perera.jpg'
import actor03 from '../images/actors/3-Sanath Gunathilaka.jpg'
import actor04 from '../images/actors/4-Semini Iddamalgoda.jpg'
import actor06 from '../images/actors/6-harshika Rathnayake.webp'
import actor07 from '../images/actors/7-ashan dayas.jpg'
import actor08 from '../images/actors/8-Isuru Lokuhetti.jpeg'
import actor09 from '../images/actors/9-Milinda Madugalla.jpg'
import actor11 from '../images/actors/11-Priyankara Rathnayake.jpg'
import actor14 from '../images/actors/14-pradip manawadu.jpg'
import actor15 from '../images/actors/15-lasantha udukubara.jpg'

import prodPriyantha from '../images/producers and director/Priyantha Colombage(director & producer).jpg'
import prodChammika from '../images/producers and director/Chammika De Silva(producer).png'
import prodManisha from '../images/producers and director/Manisha De Silva(producer).png'

import assetsData from '../data/assets.json'
import enContent from '../data/english-content.json'
import siContent from '../data/sinhala-content.json'

export const assets = assetsData
export const en = enContent
export const si = siContent

type AssetImages = typeof assetsData.images

const imageByPath: Record<string, StaticImageData> = {
  'images/Sooriya Sulanga logo.png': logo,
  'images/Sooriya Sulanga Tittle (2).png': titleImg,
  'images/loadinBackground.jpg': loadingBg,
  'images/poster.jpeg': poster,
  'images/hero/1.png': hero1,
  'images/hero/2.png': hero2,
  'images/hero/3.png': hero3,
  'images/hero/4.png': hero4,
  'images/gallery1.PNG': g1,
  'images/gallery2.PNG': g2,
  'images/gallery3.PNG': g3,
  'images/gallery4.PNG': g4,
  'images/gallery5.PNG': g5,
  'images/gallery6.PNG': g6,
  'images/gallery7.PNG': g7,
  'images/gallery8.PNG': g8,
  'images/producers and director/Priyantha Colombage(director & producer).jpg': prodPriyantha,
  'images/producers and director/Chammika De Silva(producer).png': prodChammika,
  'images/producers and director/Manisha De Silva(producer).png': prodManisha,
  'images/actors/1-Megha Sooriyaarachchi.jpg': actor01,
  'images/actors/2-Nihari Perera.jpg': actor02,
  'images/actors/3-Sanath Gunathilaka.jpg': actor03,
  'images/actors/4-Semini Iddamalgoda.jpg': actor04,
  'images/actors/6-harshika Rathnayake.webp': actor06,
  'images/actors/7-ashan dayas.jpg': actor07,
  'images/actors/8-Isuru Lokuhetti.jpeg': actor08,
  'images/actors/9-Milinda Madugalla.jpg': actor09,
  'images/actors/11-Priyankara Rathnayake.jpg': actor11,
  'images/actors/14-pradip manawadu.jpg': actor14,
  'images/actors/15-lasantha udukubara.jpg': actor15,
}

export function getImage(path: string): StaticImageData {
  return imageByPath[path]
}

export const heroImages = assets.images.hero.map(getImage)

export const galleryImages = assets.images.gallery.map(getImage)

export const producerImages = {
  'priyantha-colombage': getImage(assets.images.producers['priyantha-colombage']),
  'chammika-de-silva': getImage(assets.images.producers['chammika-de-silva']),
  'manisha-de-silva': getImage(assets.images.producers['manisha-de-silva']),
}

export const actorEntries = assets.images.actors.map((a) => ({
  id: a.id,
  image: getImage(a.path),
}))

export const actors = actorEntries

export { logo, titleImg, loadingBg, poster }
