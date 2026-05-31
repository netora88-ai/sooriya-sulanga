"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import hero1 from '../images/hero1.PNG'
import hero2 from '../images/hero2.PNG'
import hero3 from '../images/hero3.PNG'
import hero4 from '../images/hero4.PNG'
import titleImage from '../images/Sooriya Sulanga Tittle (2).png'

const MotionDiv = motion.div as React.ComponentType<any>

const IMAGES = [
  hero2.src,
  hero3.src,
  hero4.src,
]

export default function HeroSlider(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1) % IMAGES.length), 4000)
    return ()=> clearInterval(t)
  },[])

  return (
    <div className="relative h-[60vh] md:h-[70vh] bg-black overflow-hidden">
      <AnimatePresence>
        <MotionDiv
          key={IMAGES[index]}
          role="img"
          aria-label="Sooriya Sulanga hero image"
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${IMAGES[index]})` }}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
        <Image
          src={titleImage}
          alt="Sooriya Sulanga"
          className="max-h-[60%] w-auto max-w-[90%] object-contain"
          priority
        />
      </div>
    </div>
  )
}
