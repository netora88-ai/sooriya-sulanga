"use client"

import React, { useState } from 'react'
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
import { useLang } from '../lib/i18n'
import LanguageToggle from '../components/language-toggle'

const actors = [
  { name: 'Lead Actor 1', role: 'Main character', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop' },
  { name: 'Lead Actor 2', role: 'Supporting lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop' },
  { name: 'Actor 3', role: 'Key supporting role', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop' },
  { name: 'Actor 4', role: 'Family / ensemble role', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop' },
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
  const [showAllGallery, setShowAllGallery] = useState(false)
  const visibleGallery = showAllGallery ? gallery : gallery.slice(0, 6)

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="container flex items-center py-4">
          <div className="flex w-[140px] shrink-0">
            <a href="#">
              <Image src={titleLogo} alt="Sooriya Sulanga" className="h-8 w-auto object-contain" priority />
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center gap-6 overflow-x-auto text-sm font-medium text-gray-300 scrollbar-none md:gap-8">
            <a href="#trailer" className="shrink-0 transition hover:text-yellow-400">{t('nav.trailer')}</a>
            <a href="#story" className="shrink-0 transition hover:text-yellow-400">{t('nav.story')}</a>
            <a href="#ratings" className="shrink-0 transition hover:text-yellow-400">{t('nav.ratings')}</a>
            <a href="#actors" className="shrink-0 transition hover:text-yellow-400">{t('nav.actors')}</a>
            <a href="#producers" className="shrink-0 transition hover:text-yellow-400">{t('nav.producers')}</a>
            <a href="#gallery" className="shrink-0 transition hover:text-yellow-400">{t('nav.gallery')}</a>
            <a href="#cast-crew" className="shrink-0 transition hover:text-yellow-400">{t('nav.cast-crew')}</a>
          </div>
          <div className="flex w-[140px] shrink-0 items-center justify-end gap-2">
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
          </div>
        </div>
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

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {actors.map((actor) => (
            <article key={actor.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url(${actor.image})` }} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{actor.name}</h3>
                <p className="text-sm text-gray-400">{actor.role}</p>
              </div>
            </article>
          ))}
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
            <div key={image.src} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
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
