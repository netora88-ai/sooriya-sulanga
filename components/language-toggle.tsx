'use client'

import { useLang } from '../lib/i18n'

export default function LanguageToggle() {
  const { lang, setLang } = useLang()

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className="flex h-8 w-16 cursor-pointer items-center rounded-full border border-white/10 bg-white/5 p-0.5 transition hover:border-yellow-400/40"
      onClick={() => setLang(lang === 'en' ? 'si' : 'en')}
    >
      <div className="relative flex w-full items-center">
        <span
          className={`z-10 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold transition-all duration-300 ${
            lang === 'en' ? 'bg-yellow-400 text-black shadow-sm shadow-yellow-400/30' : 'text-gray-500'
          }`}
        >
          EN
        </span>
        <span
          className={`z-10 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold transition-all duration-300 ${
            lang === 'si' ? 'bg-yellow-400 text-black shadow-sm shadow-yellow-400/30' : 'text-gray-500'
          }`}
        >
          සිං
        </span>
      </div>
    </div>
  )
}
