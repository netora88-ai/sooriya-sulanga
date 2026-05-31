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

const crew = [
  { label: 'Director', value: 'Add IMDb director here' },
  { label: 'Cinematography', value: 'Add camera director here' },
  { label: 'Editing', value: 'Add editor here' },
  { label: 'Music', value: 'Add composer here' },
]

export default function Page(){
  const [showAllGallery, setShowAllGallery] = useState(false)
  const visibleGallery = showAllGallery ? gallery : gallery.slice(0, 6)

  return (
    <div>
      <header className="py-6">
        <div className="container flex justify-center">
          <h1 className="text-center text-4xl font-semibold tracking-wide text-white md:text-6xl">සූරිය සුළඟ</h1>
        </div>
      </header>

      <section className="pb-12">
        <HeroSlider />
      </section>

      <section className="container py-10">
        <div>
          <h3 className="text-xl font-semibold">Trailer</h3>
          <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
            <TrailerEmbed videoId="xPFz_NtopJc" />
          </div>
        </div>
      </section>

      <section className="container py-10">
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
            <h2 className="text-2xl font-bold">Overview / දළ විශ්ලේෂණය</h2>
            <p className="mt-4 text-gray-300">A compact one-page portfolio for Sooriya Sulanga. This section is ready for the short synopsis and key film details pulled from IMDb once you share them or the page becomes accessible.</p>
            <p className="mt-4 text-gray-300">මෙය Sooriya Sulanga සඳහා සරල එක් පිටු portfolio එකක්. IMDb වලින් ලැබෙන කෙටි විස්තරය සහ film details මෙතනට පහසුවෙන් දාන්න පුළුවන්.</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-400">
              <li><strong>Year:</strong> 2024</li>
              <li><strong>Runtime:</strong> 120 min</li>
              <li><strong>Genre:</strong> Drama</li>
              <li><strong>Status:</strong> Portfolio layout ready for cast and crew updates</li>
            </ul>
          </div>

          <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Rating Window</h3>
            <p className="mt-2 text-sm text-gray-400">Visitors can rate the film and leave a comment. MongoDB can be added later if you want persistence across devices.</p>
            <div className="mt-4">
              <Ratings />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Actors</h2>
            <p className="mt-2 text-sm text-gray-400">Add actor photos here and replace the placeholder names with the IMDb cast list.</p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/80">Cast</p>
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

      <section className="container py-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold">Director and Camera Crew</h2>
            <p className="mt-3 text-gray-300">The production crew section is ready for the director and camera team once you have the IMDb credits or poster credits.</p>
            <p className="mt-3 text-gray-400">Use this block to show the creative leadership behind the film in a clean, easy-to-scan format.</p>
          </div>

          <div className="grid gap-3">
            {crew.map((member) => (
              <div key={member.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-sm uppercase tracking-[0.25em] text-gray-500">{member.label}</span>
                <span className="text-sm font-medium text-white">{member.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div>
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p className="mt-2 text-sm text-gray-400">Replace these placeholders with film stills, posters, or BTS photos.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGallery.map((image, index) => (
            <div key={image.src} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-gray-500">Scene {index + 1}</div>
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
              {showAllGallery ? 'Show less' : 'View all'}
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

      <footer className="border-t border-gray-800 py-8">
        <div className="container text-sm text-gray-500">IMDb source: https://www.imdb.com/title/tt36046630/</div>
      </footer>
    </div>
  )
}
