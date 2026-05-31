import React from 'react'
import HeroSlider from '../components/hero-slider'
import TrailerEmbed from '../components/trailer-embed'
import Ratings from '../components/ratings'

const actors = [
  { name: 'Lead Actor 1', role: 'Main character', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop' },
  { name: 'Lead Actor 2', role: 'Supporting lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop' },
  { name: 'Actor 3', role: 'Key supporting role', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop' },
  { name: 'Actor 4', role: 'Family / ensemble role', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop' },
]

const gallery = [
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&q=80&auto=format&fit=crop',
]

const crew = [
  { label: 'Director', value: 'Add IMDb director here' },
  { label: 'Cinematography', value: 'Add camera director here' },
  { label: 'Editing', value: 'Add editor here' },
  { label: 'Music', value: 'Add composer here' },
]

export default function Page(){
  return (
    <div>
      <header className="py-6">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Sooriya Sulanga</h1>
          <nav className="text-sm text-gray-300">සූරිය සුළඟ</nav>
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
        <div className="grid gap-8 md:grid-cols-2">
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
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
          {gallery.map((image, index) => (
            <div key={image} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
              <div
                className="aspect-[16/10] bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-gray-500">Scene {index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Social Media</h2>
              <p className="mt-2 text-sm text-gray-400">Add the official Facebook and Instagram links for the film here.</p>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/80">Links</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="#"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-yellow-400/60 hover:bg-black/30"
            >
              <span>
                <span className="block text-sm uppercase tracking-[0.25em] text-gray-500">Facebook</span>
                <span className="mt-1 block text-lg font-semibold text-white">Official Facebook Page</span>
              </span>
              <span className="text-sm text-yellow-300">Open</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-yellow-400/60 hover:bg-black/30"
            >
              <span>
                <span className="block text-sm uppercase tracking-[0.25em] text-gray-500">Instagram</span>
                <span className="mt-1 block text-lg font-semibold text-white">Official Instagram Page</span>
              </span>
              <span className="text-sm text-yellow-300">Open</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8">
        <div className="container text-sm text-gray-500">IMDb source: https://www.imdb.com/title/tt36046630/</div>
      </footer>
    </div>
  )
}
