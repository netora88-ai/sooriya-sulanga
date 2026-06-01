"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import HeroSlider from '../components/hero-slider'
import TrailerEmbed from '../components/trailer-embed'
import Ratings from '../components/ratings'
import posterImage from '../images/poster.jpeg'
import galleryOne from '../images/gallery1.PNG'
import galleryTwo from '../images/gallery2.PNG'
import galleryThree from '../images/gallery3.PNG'
import galleryFour from '../images/gallery4.PNG'
import galleryFive from '../images/gallery5.PNG'
import gallerySix from '../images/gallery6.PNG'
import gallerySeven from '../images/gallery7.PNG'
import galleryEight from '../images/gallery8.PNG'
import producerChammika from '../images/producers and director/Chammika De Silva(producer).png'
import producerManisha from '../images/producers and director/Manisha De Silva(producer).png'
import directorPriyantha from '../images/producers and director/Priyantha Colombage(director & producer).jpg'
import titleLogo from '../images/Sooriya Sulanga Tittle (2).png'
import actor01 from '../images/actors/1-Megha Sooriyaarachchi.jpg'
import actor02 from '../images/actors/2-Nihari Perera.jpg'
import actor03 from '../images/actors/3-Sanath Gunathilaka.jpg'
import actor04 from '../images/actors/4-Semini Iddamalgoda.webp'
import actor06 from '../images/actors/6-harshika Rathnayake.jpg'
import actor07 from '../images/actors/7-ashan dayas.jpg'
import actor08 from '../images/actors/8-Isuru Lokuhetti.jpeg'
import actor09 from '../images/actors/9-Milinda Madugalla.jpg'
import actor10 from '../images/actors/10-Samadi Prarthana.jpeg'
import actor11 from '../images/actors/11-Priyankara Rathnayake.jpg'
import actor12 from '../images/actors/12-Athula Jayasinghe.jpg'
import actor13 from '../images/actors/13-Chinthaka Vaas.jpeg'
import actor14 from '../images/actors/14-pradip manawadu.jpg'
import actor15 from '../images/actors/15-lasantha udukubara.jpg'
import { useLang } from '../lib/i18n'
import LanguageToggle from '../components/language-toggle'

const actors = [
  { name: 'Megha Sooriyaarachchi', image: actor01 },
  { name: 'Nihari Perera', image: actor02 },
  { name: 'Sanath Gunathilaka', image: actor03 },
  { name: 'Semini Iddamalgoda', image: actor04 },
  { name: 'harshika Rathnayake', image: actor06 },
  { name: 'ashan dayas', image: actor07 },
  { name: 'Isuru Lokuhetti', image: actor08 },
  { name: 'Milinda Madugalla', image: actor09 },
  { name: 'Samadi Prarthana', image: actor10 },
  { name: 'Priyankara Rathnayake', image: actor11 },
  { name: 'Athula Jayasinghe', image: actor12 },
  { name: 'Chinthaka Vaas', image: actor13 },
  { name: 'pradip manawadu', image: actor14 },
  { name: 'lasantha udukubara', image: actor15 },
]

const gallery = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
  gallerySix,
  gallerySeven,
  galleryEight,
]

export default function Page(){
  const { t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllGallery, setShowAllGallery] = useState(false)
  const visibleGallery = showAllGallery ? gallery : gallery.slice(0, 6)
  const [selectedImage, setSelectedImage] = useState<typeof gallery[number] | null>(null)
  const [previewVisible, setPreviewVisible] = useState(false)

  const openPreview = (image: typeof gallery[number]) => {
    setSelectedImage(image)
    requestAnimationFrame(() => setPreviewVisible(true))
  }

  const closePreview = () => {
    setPreviewVisible(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.5
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => { checkScroll() }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="container flex items-center py-4">
          <div className="flex w-[140px] shrink-0">
            <a href="#">
              <Image src={titleLogo} alt="Sooriya Sulanga" className="h-8 w-auto object-contain [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]" priority />
            </a>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium text-gray-300 md:gap-8">
            <a href="#trailer" className="shrink-0 transition hover:text-yellow-400">{t('nav.trailer')}</a>
            <a href="#story" className="shrink-0 transition hover:text-yellow-400">{t('nav.story')}</a>
            <a href="#ratings" className="shrink-0 transition hover:text-yellow-400">{t('nav.ratings')}</a>
            <a href="#actors" className="shrink-0 transition hover:text-yellow-400">{t('nav.actors')}</a>
            <a href="#producers" className="shrink-0 transition hover:text-yellow-400">{t('nav.producers')}</a>
            <a href="#gallery" className="shrink-0 transition hover:text-yellow-400">{t('nav.gallery')}</a>
            <a href="#cast-crew" className="shrink-0 transition hover:text-yellow-400">{t('nav.cast-crew')}</a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
            <LanguageToggle />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-gray-400 transition hover:bg-[#1877f2]/15 hover:text-[#1877f2]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.4 1.5-1.4h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2H8v3.1h2.3V22h3.2z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-gray-400 transition hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-gray-400 transition hover:bg-white/15 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
            <div className="container flex flex-col gap-4 py-5 text-sm font-medium text-gray-300">
              <a href="#trailer" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.trailer')}</a>
              <a href="#story" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.story')}</a>
              <a href="#ratings" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.ratings')}</a>
              <a href="#actors" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.actors')}</a>
              <a href="#producers" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.producers')}</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.gallery')}</a>
              <a href="#cast-crew" onClick={() => setMenuOpen(false)} className="transition hover:text-yellow-400">{t('nav.cast-crew')}</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 pb-12">
        <HeroSlider />
      </section>

      <section id="trailer" className="container py-10">
        <div>
          <h2 className="text-center text-3xl font-bold md:text-4xl">{t('section.watch-trailer')}</h2>
          <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
            <TrailerEmbed videoId="xPFz_NtopJc" />
          </div>
        </div>
      </section>

      <section id="story" className="container py-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={posterImage}
              alt="Sooriya Sulanga poster"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">{t('section.story')}</h2>
            <p className="mt-4 leading-7 text-gray-300">
              කොළඹ පෞද්ගලික බැංකුවක විධායක නිලධාරියෙකු වන සිෙත්, තම විවාහයට පෙර මිතුරන් සමඟ පැවැත්වූ සාදයකින් පසු අහම්බෙන් හමු වූ රෝගී තරුණියක් වන රෝධාට එක් රැයක් සඳහා නවාතැන් ලබා දෙයි. නමුත් පසුව ඇය බෝම්බ ප්‍රහාරයකට සම්බන්ධ සැකකාරියක් ලෙස හඳුනාගැනීමත් සමඟ සිෙත් අත්අඩංගුවට පත්වේ.
            </p>
            <p className="mt-4 leading-7 text-gray-300">
              මෙම සිදුවීම නිසා ඔහුගේ රැකියාව, විවාහය සහ පවුල් ජීවිතය බිඳ වැටෙන අතර, ඔහුගේ පියාද මිය යයි. සියල්ල අහිමි වූ සිෙත්, රෝධා පිළිබඳ සැඟවුණු සත්‍යය සොයා යමින්, ඇය පිටුපස තිබූ විශාල රහසක් හෙළිකර ගැනීමට උත්සාහ කරයි.
            </p>
            <p className="mt-4 leading-7 text-gray-300">
              අවසානයේ සිෙත් තම නිර්දෝෂීභාවය ඔප්පු කරගත හැකිද, තරුශි සමඟ නැවත එක්විය හැකිද, සහ රෝධාගේ සැබෑ කතාව කුමක්ද යන්න මෙම කතාවේ ප්‍රධාන අභිරහස් වේ.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-400">
              <li><strong>Year:</strong> 2024</li>
              <li><strong>Runtime:</strong> 120 min</li>
              <li><strong>Genre:</strong> Drama / Thriller</li>
            </ul>
          </div>

          <div id="ratings" className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{t('ratings.current')}</h3>
            <p className="mt-2 text-sm text-gray-400">{t('ratings.rate')}</p>
            <div className="mt-4">
              <Ratings />
            </div>
          </div>
        </div>
      </section>

      <section id="actors" className="container py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('section.actors')}</h2>
            <p className="mt-2 text-sm text-gray-400">{t('section.actors-placeholder')}</p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/80">{t('section.cast')}</p>
        </div>

        <div className="relative mt-6">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition hover:bg-white/15 md:-left-4 md:h-10 md:w-10"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition hover:bg-white/15 md:-right-4 md:h-10 md:w-10"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto scrollbar-none md:gap-6"
          >
            {actors.map((actor) => (
              <div key={actor.name} className="flex w-24 shrink-0 flex-col items-center gap-3 md:w-32">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-white/15 bg-white/5 md:h-32 md:w-32">
                  <Image
                    src={actor.image}
                    alt={actor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-center text-xs font-medium text-white md:text-sm">
                  {actor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="producers" className="container py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('section.producers')}</h2>
            <p className="mt-2 text-sm text-gray-400">{t('section.producers-placeholder')}</p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/80">{t('section.team')}</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
            <Image
              src={directorPriyantha}
              alt="Priyantha Colombage"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Priyantha Colombage</h3>
              <p className="text-sm text-yellow-300/80">{t('role.director-producer')}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
            <Image
              src={producerChammika}
              alt="Chammika De Silva"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Chammika De Silva</h3>
              <p className="text-sm text-yellow-300/80">{t('role.producer')}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
            <Image
              src={producerManisha}
              alt="Manisha De Silva"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Manisha De Silva</h3>
              <p className="text-sm text-yellow-300/80">{t('role.producer')}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="gallery" className="container py-10">
        <div>
          <h2 className="text-2xl font-bold">{t('section.gallery')}</h2>
          <p className="mt-2 text-sm text-gray-400">{t('section.gallery-placeholder')}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGallery.map((image, index) => (
            <div
              key={image.src}
              className="group cursor-pointer overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5"
              onClick={() => openPreview(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-gray-500">{t('scene')} {index + 1}</div>
            </div>
          ))}
        </div>

        {gallery.length > 6 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllGallery((current) => !current)}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-yellow-400/60 hover:bg-white/10"
            >
              {showAllGallery ? t('section.show-less') : t('section.view-all')}
            </button>
          </div>
        )}
      </section>

      {selectedImage && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ease-out ${previewVisible ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'}`}
          onClick={closePreview}
        >
          <div
            className={`relative transition-all duration-300 ease-out ${previewVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePreview}
              className="absolute -right-3 -top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white/20"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image full view"
              className="max-h-[85vh] max-w-[90vw] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

      <section className="container py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              aria-label="Open Facebook page"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 transition hover:border-yellow-400/60 hover:bg-black/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#1877f2]/15 text-[#1877f2] transition group-hover:bg-[#1877f2]/20">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.4 1.5-1.4h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2H8v3.1h2.3V22h3.2z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              aria-label="Open Instagram page"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 transition hover:border-yellow-400/60 hover:bg-black/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition group-hover:opacity-95">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </span>
            </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cast-crew" className="container py-10">
        <h2 className="text-2xl font-bold">{t('section.cast-crew')}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ප්‍රියන්ත කොළඹගේ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.production')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>මනීෂා ද සිල්වා</li>
              <li>චම්මික ද සිල්වා</li>
              <li>ප්‍රියන්ත කොළඹගේ</li>
              <li>රංජිත් පෙරේරා</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.assistant-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ඩොනල්ඩ් ජයන්ත</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.art-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ලෙස්ලි විමල් වීරසිංහ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.costume-design')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ලසන්ත උඩුකුඹුර</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.dance-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>හර්ෂිකා රත්නායක</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.music-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>තිරාන් විජයසිංහ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.sound-design')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>තිරාන් විජයසිංහ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.vfx')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>දසුන් සඳීප කොළඹගේ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.drone-operator')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ඇලෙක්ස් කල්ඩෙරා</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.weapon-instructor')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>අභිත රුවන්ජිත්</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.additional-crew')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>ප්‍රියන්ත පතිරණ</li>
              <li>චාපා පෙරේරා</li>
              <li>නිරුක්ෂාන් සේනානායක</li>
              <li>ලක්ෂ්මන් වික්‍රමතිලක</li>
              <li>සුරාජ් අස්මත්</li>
              <li>අමිත් විජේසුන්දර</li>
              <li>ජනක ප්‍රියදර්ශන</li>
              <li>අශේන් උදුල</li>
              <li>ප්‍රභාත් දර්ශන</li>
              <li>හර්ෂිකා රත්නායක</li>
              <li>එස්. එම්. සුමිත් විජය කුමාර</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.main-cast')}</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <ul className="space-y-1 text-sm text-gray-300">
                <li>මේඝ සූරියආරච්චි</li>
                <li>නිහාරි පෙරේරා</li>
                <li>සනත් ගුණතිලක</li>
                <li>සෙමිණි ඉද්දමල්ගොඩ</li>
                <li>ජිනි රොයිස්</li>
              </ul>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>හර්ෂිකා රත්නායක</li>
                <li>අශාන් ඩයස්</li>
                <li>ඉසුරු ලොකුහෙට්ටිආරච්චි</li>
                <li>මිලින්ද මඩුගල්ල</li>
                <li>සමධි ප්‍රාර්ථනා</li>
              </ul>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>ටෙරී ජයසිංහ</li>
                <li>ලහිරු බාලසූරිය</li>
                <li>මුතු තරංග</li>
                <li>සදුන් බණ්ඩාර</li>
                <li>ප්‍රියංකර රත්නායක</li>
              </ul>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>අතුල ජයසිංහ</li>
                <li>චින්තක වාස්</li>
                <li>ප්‍රදීප් මානවඩු</li>
                <li>ප්‍රින්ස් ප්‍රනාන්දු</li>
                <li>ලසන්ත උඩුකුඹුර</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8">
        <div className="container text-sm text-gray-500">IMDb source: https://www.imdb.com/title/tt36046630/</div>
      </footer>
    </div>
  )
}
