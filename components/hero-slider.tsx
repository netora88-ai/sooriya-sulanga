"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import heroLayer1 from '../images/hero/1.png'
import heroLayer2 from '../images/hero/2.png'
import heroLayer3 from '../images/hero/3.png'
import heroLayer4 from '../images/hero/4.png'
import heroOld2 from '../images/hero2.PNG'
import heroOld3 from '../images/hero3.PNG'
import heroOld4 from '../images/hero4.PNG'
import titleImage from '../images/Sooriya Sulanga Tittle (2).png'

const MotionDiv = motion.div as React.ComponentType<any>

const LAYER_IMAGES = [heroLayer1, heroLayer2, heroLayer3, heroLayer4]
const SINGLE_SLIDES = [heroOld2.src, heroOld3.src, heroOld4.src]
const TOTAL_SLIDES = 1 + SINGLE_SLIDES.length

export default function HeroSlider({ ready = true }: { ready?: boolean }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [layersVisible, setLayersVisible] = useState(0)
  const [titleShown, setTitleShown] = useState(false)

  useEffect(() => {
    if (!ready) return
    setLayersVisible(0)

    if (slideIndex === 0) {
      const timers: ReturnType<typeof setTimeout>[] = []
      for (let i = 1; i <= 4; i++) {
        timers.push(setTimeout(() => setLayersVisible(i), i * 500))
      }
      timers.push(setTimeout(() => setTitleShown(true), 2000 + 300))
      timers.push(setTimeout(() => {
        setSlideIndex(i => (i + 1) % TOTAL_SLIDES)
      }, 2000 + 3000))
      return () => timers.forEach(clearTimeout)
    }

    const t = setTimeout(() => {
      setSlideIndex(i => (i + 1) % TOTAL_SLIDES)
    }, 4000)
    return () => clearTimeout(t)
  }, [slideIndex, ready])

  return (
    <div className="relative h-[40vh] md:h-[70vh] bg-black overflow-hidden">
      <AnimatePresence initial={false}>
        {slideIndex === 0 ? (
          <MotionDiv
            key="layers"
            className="absolute inset-0"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {LAYER_IMAGES.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${img.src})`,
                  opacity: i < layersVisible ? 1 : 0,
                }}
              />
            ))}
          </MotionDiv>
        ) : (
          <MotionDiv
            key={`single-${slideIndex}`}
            role="img"
            aria-label="Sooriya Sulanga hero image"
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${SINGLE_SLIDES[slideIndex - 1]})` }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute inset-0 flex items-end justify-center z-10 p-6 pb-10 md:pb-3 overflow-hidden">
        <Image
          src={titleImage}
          alt="Sooriya Sulanga"
          className={`max-h-[45%] w-auto max-w-[90%] object-contain transition-all duration-1000 ease-out ${titleShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
          priority
        />
      </div>
    </div>
  )
}
