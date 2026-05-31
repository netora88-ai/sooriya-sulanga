"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionDiv = motion.div as React.ComponentType<any>

const IMAGES = [
  'https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=1920&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502209524166-acea9362d9c3?w=1920&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1920&q=80&auto=format&fit=crop'
]

export default function HeroSlider(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1) % IMAGES.length), 4000)
    return ()=> clearInterval(t)
  },[])

  return (
    <div className="relative h-[60vh] md:h-[70vh] bg-black">
      <AnimatePresence mode="wait">
        <MotionDiv
          key={IMAGES[index]}
          role="img"
          aria-label="Sooriya Sulanga hero image"
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${IMAGES[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      <div className="absolute bottom-12 left-6 text-white">
        <h2 className="text-4xl font-bold">Sooriya Sulanga</h2>
        <p className="mt-2 text-gray-300 hidden md:block">සූරිය සුළඟ — A cinematic portrait of memory and longing.</p>
      </div>
    </div>
  )
}
