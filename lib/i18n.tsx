'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import enContent from '../data/english-content.json'
import siContent from '../data/sinhala-content.json'

export type Lang = 'en' | 'si'

type TranslationRecord = Record<string, { en: string; si: string }>

type AnyDict = Record<string, unknown>

function buildTranslations(en: AnyDict, si: AnyDict): TranslationRecord {
  const t: TranslationRecord = {}

  t['nav.trailer'] = { en: (en.nav as AnyDict).trailer as string, si: (si.nav as AnyDict).trailer as string }
  t['nav.story'] = { en: (en.nav as AnyDict).story as string, si: (si.nav as AnyDict).story as string }
  t['nav.ratings'] = { en: (en.nav as AnyDict).ratings as string, si: (si.nav as AnyDict).ratings as string }
  t['nav.actors'] = { en: (en.nav as AnyDict).actors as string, si: (si.nav as AnyDict).actors as string }
  t['nav.producers'] = { en: (en.nav as AnyDict).producers as string, si: (si.nav as AnyDict).producers as string }
  t['nav.gallery'] = { en: (en.nav as AnyDict).gallery as string, si: (si.nav as AnyDict).gallery as string }
  t['nav.instagram'] = { en: (en.nav as AnyDict).instagram as string, si: (si.nav as AnyDict).instagram as string }
  t['nav.cast-crew'] = { en: (en.nav as AnyDict).castCrew as string, si: (si.nav as AnyDict).castCrew as string }

  t['section.watch-trailer'] = { en: (en.trailer as AnyDict).heading as string, si: (si.trailer as AnyDict).heading as string }
  t['section.story'] = { en: (en.story as AnyDict).heading as string, si: (si.story as AnyDict).heading as string }
  t['section.actors'] = { en: (en.actors as AnyDict).heading as string, si: (si.actors as AnyDict).heading as string }
  t['section.actors-placeholder'] = { en: (en.actors as AnyDict).placeholder as string, si: (si.actors as AnyDict).placeholder as string }
  t['section.producers'] = { en: (en.producers as AnyDict).heading as string, si: (si.producers as AnyDict).heading as string }
  t['section.producers-placeholder'] = { en: (en.producers as AnyDict).placeholder as string, si: (si.producers as AnyDict).placeholder as string }
  t['section.gallery'] = { en: (en.gallery as AnyDict).heading as string, si: (si.gallery as AnyDict).heading as string }
  t['section.gallery-placeholder'] = { en: (en.gallery as AnyDict).placeholder as string, si: (si.gallery as AnyDict).placeholder as string }
  t['section.instagram'] = { en: (en.instagram as AnyDict).heading as string, si: (si.instagram as AnyDict).heading as string }
  t['section.instagram-placeholder'] = { en: (en.instagram as AnyDict).placeholder as string, si: (si.instagram as AnyDict).placeholder as string }
  t['section.cast-crew'] = { en: (en.castCrew as AnyDict).heading as string, si: (si.castCrew as AnyDict).heading as string }
  t['section.cast'] = { en: (en.actors as AnyDict).cast as string, si: (si.actors as AnyDict).cast as string }
  t['section.team'] = { en: (en.producers as AnyDict).team as string, si: (si.producers as AnyDict).team as string }
  t['section.view-all'] = { en: (en.common as AnyDict).viewAll as string, si: (si.common as AnyDict).viewAll as string }
  t['section.show-less'] = { en: (en.common as AnyDict).showLess as string, si: (si.common as AnyDict).showLess as string }

  t['ratings.current'] = { en: (en.ratings as AnyDict).current as string, si: (si.ratings as AnyDict).current as string }
  t['ratings.rate'] = { en: (en.ratings as AnyDict).rate as string, si: (si.ratings as AnyDict).rate as string }
  t['ratings.select'] = { en: (en.ratings as AnyDict).select as string, si: (si.ratings as AnyDict).select as string }
  t['ratings.your-name'] = { en: (en.ratings as AnyDict).yourName as string, si: (si.ratings as AnyDict).yourName as string }
  t['ratings.comment-placeholder'] = { en: (en.ratings as AnyDict).commentPlaceholder as string, si: (si.ratings as AnyDict).commentPlaceholder as string }
  t['ratings.submit'] = { en: (en.ratings as AnyDict).submit as string, si: (si.ratings as AnyDict).submit as string }
  t['ratings.submitting'] = { en: (en.ratings as AnyDict).submitting as string, si: (si.ratings as AnyDict).submitting as string }
  t['ratings.comments'] = { en: (en.ratings as AnyDict).comments as string, si: (si.ratings as AnyDict).comments as string }
  t['ratings.no-comments'] = { en: (en.ratings as AnyDict).noComments as string, si: (si.ratings as AnyDict).noComments as string }
  t['ratings.review'] = { en: (en.ratings as AnyDict).review as string, si: (si.ratings as AnyDict).review as string }
  t['ratings.reviews'] = { en: (en.ratings as AnyDict).reviews as string, si: (si.ratings as AnyDict).reviews as string }
  t['ratings.no-reviews'] = { en: (en.ratings as AnyDict).noReviews as string, si: (si.ratings as AnyDict).noReviews as string }
  t['ratings.stored-mongo'] = { en: (en.ratings as AnyDict).storedMongo as string, si: (si.ratings as AnyDict).storedMongo as string }
  t['ratings.stored-local'] = { en: (en.ratings as AnyDict).storedLocal as string, si: (si.ratings as AnyDict).storedLocal as string }
  t['ratings.you-rated'] = { en: (en.ratings as AnyDict).youRated as string, si: (si.ratings as AnyDict).youRated as string }
  t['ratings.out-of'] = { en: (en.ratings as AnyDict).outOf as string, si: (si.ratings as AnyDict).outOf as string }

  t['story.year'] = { en: ((en.story as AnyDict).labels as AnyDict).year as string, si: ((si.story as AnyDict).labels as AnyDict).year as string }
  t['story.runtime'] = { en: ((en.story as AnyDict).labels as AnyDict).runtime as string, si: ((si.story as AnyDict).labels as AnyDict).runtime as string }
  t['story.genre'] = { en: ((en.story as AnyDict).labels as AnyDict).genre as string, si: ((si.story as AnyDict).labels as AnyDict).genre as string }
  t['story.read-more'] = { en: (en.common as AnyDict).readMore as string, si: (si.common as AnyDict).readMore as string }

  t['scene'] = { en: (en.gallery as AnyDict).scene as string, si: (si.gallery as AnyDict).scene as string }

  const enCC = en.castCrew as AnyDict
  const siCC = si.castCrew as AnyDict
  const enSub = enCC.subsections as AnyDict
  const siSub = siCC.subsections as AnyDict

  t['cast-crew.direction'] = { en: (enSub.direction as AnyDict).heading as string, si: (siSub.direction as AnyDict).heading as string }
  t['cast-crew.production'] = { en: (enSub.production as AnyDict).heading as string, si: (siSub.production as AnyDict).heading as string }
  t['cast-crew.assistant-direction'] = { en: (enSub.assistantDirection as AnyDict).heading as string, si: (siSub.assistantDirection as AnyDict).heading as string }
  t['cast-crew.art-direction'] = { en: (enSub.artDirection as AnyDict).heading as string, si: (siSub.artDirection as AnyDict).heading as string }
  t['cast-crew.costume-design'] = { en: (enSub.costumeDesign as AnyDict).heading as string, si: (siSub.costumeDesign as AnyDict).heading as string }
  t['cast-crew.dance-direction'] = { en: (enSub.danceDirection as AnyDict).heading as string, si: (siSub.danceDirection as AnyDict).heading as string }
  t['cast-crew.music-direction'] = { en: (enSub.musicDirection as AnyDict).heading as string, si: (siSub.musicDirection as AnyDict).heading as string }
  t['cast-crew.sound-design'] = { en: (enSub.soundDesign as AnyDict).heading as string, si: (siSub.soundDesign as AnyDict).heading as string }
  t['cast-crew.vfx'] = { en: (enSub.vfx as AnyDict).heading as string, si: (siSub.vfx as AnyDict).heading as string }
  t['cast-crew.drone-operator'] = { en: (enSub.droneOperator as AnyDict).heading as string, si: (siSub.droneOperator as AnyDict).heading as string }
  t['cast-crew.weapon-instructor'] = { en: (enSub.weaponInstructor as AnyDict).heading as string, si: (siSub.weaponInstructor as AnyDict).heading as string }
  t['cast-crew.additional-crew'] = { en: (enSub.additionalCrew as AnyDict).heading as string, si: (siSub.additionalCrew as AnyDict).heading as string }
  t['cast-crew.main-cast'] = { en: (enSub.mainCast as AnyDict).heading as string, si: (siSub.mainCast as AnyDict).heading as string }

  t['role.director-producer'] = { en: (en.roles as AnyDict).directorProducer as string, si: (si.roles as AnyDict).directorProducer as string }
  t['role.producer'] = { en: (en.roles as AnyDict).producer as string, si: (si.roles as AnyDict).producer as string }

  const enNames = en.names as Record<string, string>
  const siNames = si.names as Record<string, string>
  for (const key of Object.keys(enNames)) {
    t[`name.${key}`] = { en: enNames[key], si: siNames[key] }
  }

  const enSynopsis = ((en.story as AnyDict)?.synopsis as string[]) ?? undefined
  const siSynopsis = ((si.story as AnyDict)?.synopsis as string[]) ?? undefined
  if (enSynopsis && siSynopsis) {
    enSynopsis.forEach((text, i) => {
      if (siSynopsis[i]) {
        t[`story.synopsis.${i}`] = { en: text, si: siSynopsis[i] }
      }
    })
  }

  return t
}

const translations = buildTranslations(enContent as unknown as AnyDict, siContent as unknown as AnyDict)

interface LangContext {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangCtx = createContext<LangContext>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('sooriya-sulanga-lang')
    if (stored === 'en' || stored === 'si') setLangState(stored)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    window.localStorage.setItem('sooriya-sulanga-lang', l)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[key]?.[lang] ?? key
  }, [lang])

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}
