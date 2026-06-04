"use client"

import React, { useState, useEffect } from 'react'
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
import titleLogo from '../images/Sooriya Sulanga logo.png'
import loadingBg from '../images/loadinBackground.jpg'
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
import { useLang } from '../lib/i18n'
import LanguageToggle from '../components/language-toggle'

const actors = [
  { nameKey: 'name.megha-sooriyaarachchi', image: actor01 },
  { nameKey: 'name.nihari-perera', image: actor02 },
  { nameKey: 'name.sanath-gunathilaka', image: actor03 },
  { nameKey: 'name.semini-iddamalgoda', image: actor04 },
  { nameKey: 'name.ashan-dias', image: actor07 },
  { nameKey: 'name.isuru-lokuhettiarachchi', image: actor08 },
  { nameKey: 'name.harshika-rathnayake', image: actor06 },
  { nameKey: 'name.milinda-madugalle', image: actor09 },
  { nameKey: 'name.priyankara-rathnayake', image: actor11 },
  { nameKey: 'name.pradeep-manawadu', image: actor14 },
  { nameKey: 'name.lasantha-udukumbura', image: actor15 },
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
  const [loading, setLoading] = useState(true)
  const allPosts = [
    'https://www.instagram.com/p/DJteU-YoOL0/embed/captioned',
    'https://www.instagram.com/p/DXwRL2qkXQX/embed/captioned',
    'https://www.instagram.com/p/DXD70IwFiXJ/embed/captioned',
    'https://www.instagram.com/reel/DRV8l9nCo4-/embed/captioned',
    'https://www.instagram.com/p/DLg3OJZqCsV/embed/captioned',
    'https://www.instagram.com/reel/DJavQmCB5wc/embed/captioned',
  ]
  const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 4))
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        const shuffled = [...allPosts].sort(() => Math.random() - 0.5)
        setVisiblePosts(shuffled.slice(0, 4))
        setFading(false)
      }, 500)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const [showAllActors, setShowAllActors] = useState(false)
  const visibleActors = showAllActors ? actors : actors.slice(0, 8)
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const minTimer = setTimeout(() => {
      if (document.readyState === 'complete') {
        setLoading(false)
      } else {
        window.addEventListener('load', () => setLoading(false), { once: true })
      }
    }, 1500)
    return () => clearTimeout(minTimer)
  }, [])

  return (
    <>
      {loading && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${loadingBg.src})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <Image
            src={titleLogo}
            alt="Sooriya Sulanga"
            className="relative h-32 w-auto md:h-40"
            priority
          />
          <div className="relative mt-8 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-yellow-400" />
        </div>
      )}
      <div className={loading ? 'invisible' : ''}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="container flex items-center py-4">
          <div className="flex w-[140px] shrink-0">
            <a href="#">
              <Image src={titleLogo} alt="Sooriya Sulanga" className="h-10 w-auto object-contain md:h-12 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]" priority />
            </a>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-bold text-red-500 md:gap-8">
            <a href="#trailer" className="shrink-0 transition hover:text-red-400">{t('nav.trailer')}</a>
            <a href="#story" className="shrink-0 transition hover:text-red-400">{t('nav.story')}</a>
            <a href="#ratings" className="shrink-0 transition hover:text-red-400">{t('nav.ratings')}</a>
            <a href="#actors" className="shrink-0 transition hover:text-red-400">{t('nav.actors')}</a>
            <a href="#producers" className="shrink-0 transition hover:text-red-400">{t('nav.producers')}</a>
            <a href="#gallery" className="shrink-0 transition hover:text-red-400">{t('nav.gallery')}</a>
            <a href="#instagram" className="shrink-0 transition hover:text-red-400">{t('nav.instagram')}</a>
            <a href="#cast-crew" className="shrink-0 transition hover:text-red-400">{t('nav.cast-crew')}</a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
            <LanguageToggle />
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
            <div className="container flex flex-col gap-4 py-5 text-sm font-bold text-red-500">
              <a href="#trailer" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.trailer')}</a>
              <a href="#story" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.story')}</a>
              <a href="#ratings" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.ratings')}</a>
              <a href="#actors" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.actors')}</a>
              <a href="#producers" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.producers')}</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.gallery')}</a>
              <a href="#instagram" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.instagram')}</a>
              <a href="#cast-crew" onClick={() => setMenuOpen(false)} className="transition hover:text-red-400">{t('nav.cast-crew')}</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 pb-12">
        <HeroSlider ready={!loading} />
      </section>

      <section id="trailer" className="container py-10">
        <div>
          <h2 className="text-center text-3xl font-bold md:text-4xl">{t('section.watch-trailer')}</h2>
          <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
            <TrailerEmbed videoId="W6vEC1Np9CI" />
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
              Sineth, an executive at a private bank in Colombo, offers shelter for one night to a sick young woman named Radha after encountering her following a gathering with friends on the eve of his wedding. However, his life takes a devastating turn when Radha is later identified as a suspect connected to a violent attack, leading to his arrest.
            </p>
            <p className="mt-4 leading-7 text-gray-300">
              As the incident shatters his career, engagement, and family life, Sineth finds himself isolated and struggling to rebuild his future. Determined to uncover the truth, he embarks on a journey to investigate Radha's past, gradually revealing secrets far more complex than he ever imagined.
            </p>
            <p className="mt-4 leading-7 text-gray-300">
              Can Sineth prove his innocence, reunite with the woman he loves, and uncover the truth behind Radha's story? Sooriya Sulanga is a gripping action thriller that explores fate, sacrifice, and the unexpected consequences of a single decision.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-400">
              <li><strong>{t('story.year')}:</strong> 2024</li>
              <li><strong>{t('story.runtime')}:</strong> 120 min</li>
              <li><strong>{t('story.genre')}:</strong> Drama / Thriller</li>
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

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleActors.map((actor) => (
            <article key={actor.nameKey} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <Image
                src={actor.image}
                alt={t(actor.nameKey)}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{t(actor.nameKey)}</h3>
              </div>
            </article>
          ))}
        </div>

        {actors.length > 8 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllActors((current) => !current)}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-yellow-400/60 hover:bg-white/10"
            >
              {showAllActors ? t('section.show-less') : t('section.view-all')}
            </button>
          </div>
        )}
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
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
            <div className="aspect-square overflow-hidden">
              <Image
                src={directorPriyantha}
                alt={t('name.priyantha-colombage')}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-center text-sm font-medium text-white">{t('name.priyantha-colombage')}</span>
              <span className="block text-xs text-yellow-300/80">{t('role.director-producer')}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
            <div className="aspect-square overflow-hidden">
              <Image
                src={producerChammika}
                alt={t('name.chammika-de-silva')}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-center text-sm font-medium text-white">{t('name.chammika-de-silva')}</span>
              <span className="block text-xs text-yellow-300/80">{t('role.producer')}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
            <div className="aspect-square overflow-hidden">
              <Image
                src={producerManisha}
                alt={t('name.manisha-de-silva')}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-center text-sm font-medium text-white">{t('name.manisha-de-silva')}</span>
              <span className="block text-xs text-yellow-300/80">{t('role.producer')}</span>
            </div>
          </div>
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



      <section id="instagram" className="container py-10">
        <div>
          <h2 className="text-2xl font-bold">{t('section.instagram')}</h2>
          <p className="mt-2 text-sm text-gray-400">{t('section.instagram-placeholder')}</p>
        </div>

        <div className={`mt-6 grid gap-6 transition-all duration-500 sm:grid-cols-2 ${fading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          {visiblePosts.map((src) => (
            <div key={src} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
              <iframe
                src={src}
                className="w-full min-h-[460px]"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                title="Instagram post"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="cast-crew" className="container py-10">
        <h2 className="text-2xl font-bold">{t('section.cast-crew')}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.priyantha-colombage')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.production')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.manisha-de-silva')}</li>
              <li>{t('name.chammika-de-silva')}</li>
              <li>{t('name.priyantha-colombage')}</li>
              <li>{t('name.ranjith-perera')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.assistant-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.donald-jayantha')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.art-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.leslie-wimal-weerasinghe')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.costume-design')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.lasantha-udukumbura')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.dance-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.harshika-rathnayake')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.music-direction')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.thiran-wijesinghe')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.sound-design')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.thiran-wijesinghe')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.vfx')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.dasun-sandeepa-colombage')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.drone-operator')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.alex-caldera')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.weapon-instructor')}</h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>{t('name.abitha-ruwanjith')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.additional-crew')}</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.priyantha-pathirana')}</li>
              <li>{t('name.chapa-perera')}</li>
              <li>{t('name.nirukshan-senanayake')}</li>
              <li>{t('name.lakshman-wickramathilaka')}</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.suraj-asmath')}</li>
              <li>{t('name.amith-wijesundara')}</li>
              <li>{t('name.janaka-priyadarshana')}</li>
              <li>{t('name.ashen-udula')}</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.prabath-darshana')}</li>
              <li>{t('name.harshika-rathnayake')}</li>
              <li>{t('name.sm-sumith-vijaya-kumara')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300/80">{t('cast-crew.main-cast')}</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.megha-sooriyaarachchi')}</li>
              <li>{t('name.nihari-perera')}</li>
              <li>{t('name.sanath-gunathilaka')}</li>
              <li>{t('name.semini-iddamalgoda')}</li>
              <li>{t('name.jini-roys')}</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.harshika-rathnayake')}</li>
              <li>{t('name.ashan-dias')}</li>
              <li>{t('name.isuru-lokuhettiarachchi')}</li>
              <li>{t('name.milinda-madugalle')}</li>
              <li>{t('name.samadhi-prarthana')}</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.terry-jayasinghe')}</li>
              <li>{t('name.lahiru-balasooriya')}</li>
              <li>{t('name.muthu-tharanga')}</li>
              <li>{t('name.sandun-bandara')}</li>
              <li>{t('name.priyankara-rathnayake')}</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t('name.athula-jayasinghe')}</li>
              <li>{t('name.chinthaka-vaas')}</li>
              <li>{t('name.pradeep-manawadu')}</li>
              <li>{t('name.prince-fernando')}</li>
              <li>{t('name.lasantha-udukumbura')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SIDE SOCIAL ICONS */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pr-0">
        <div className="flex flex-col gap-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-l-2xl py-4 px-2 translate-x-[calc(100%-40px)] hover:translate-x-0 transition-transform duration-300">
          <a href="https://web.facebook.com/SooriyaSulangaa" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-[#1877f2]/15 hover:text-[#1877f2]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.4 1.5-1.4h1.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2H8v3.1h2.3V22h3.2z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/sooriyasulangafilm" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
          </a>
          <div
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-gray-400 cursor-default">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>

        </div>
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="container text-sm text-gray-500"></div>
      </footer>
    </div>
    </>
  )
}
