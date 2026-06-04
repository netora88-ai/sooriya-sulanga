'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Lang = 'en' | 'si'

type Dict = Record<string, { en: string; si: string }>

const translations: Dict = {
  'nav.trailer': { en: 'Trailer', si: 'ට්‍රේලරය' },
  'nav.story': { en: 'Story', si: 'කතාව' },
  'nav.ratings': { en: 'Ratings', si: 'ඇගයීම්' },
  'nav.actors': { en: 'Actors', si: 'නළු නිළියෝ' },
  'nav.producers': { en: 'Producers', si: 'නිෂ්පාදකයෝ' },
  'nav.gallery': { en: 'Gallery', si: 'ගැලරිය' },
  'nav.instagram': { en: 'Instagram', si: 'Instagram' },
  'nav.cast-crew': { en: 'Cast & Crew', si: 'කාර්මික කණ්ඩායම' },

  'section.watch-trailer': { en: 'Watch Trailer', si: 'ට්‍රේලරය නරඹන්න' },
  'section.story': { en: 'Story', si: 'කතාව' },
  'section.actors': { en: 'Actors', si: 'නළු නිළියෝ' },
  'section.actors-placeholder': { en: 'Add actor photos here and replace the placeholder names with the IMDb cast list.', si: 'නළු නිළි ඡායාරූප සහ නම් එක් කරන්න.' },
  'section.producers': { en: 'Producers & Director', si: 'නිෂ්පාදකයෝ සහ අධ්‍යක්ෂ' },
  'section.producers-placeholder': { en: 'The creative leadership behind Sooriya Sulanga.', si: 'සූරිය සුළඟ පිටුපස නිර්මාණාත්මක නායකත්වය.' },
  'section.gallery': { en: 'Gallery', si: 'ගැලරිය' },
  'section.gallery-placeholder': { en: 'Replace these placeholders with film stills, posters, or BTS photos.', si: 'චිත්‍රපට දර්ශන, පෝස්ටර් හෝ BTS ඡායාරූප එක් කරන්න.' },
  'section.instagram': { en: 'Instagram', si: 'Instagram' },
  'section.instagram-placeholder': { en: 'Follow us on Instagram', si: 'Instagram හි අපව අනුගමනය කරන්න' },
  'section.cast-crew': { en: 'Cast & Crew / Main Technical Team', si: 'ප්‍රධාන කාර්මික ශිල්පී නාමාවලිය' },
  'section.cast': { en: 'Cast', si: 'රංගනය' },
  'section.team': { en: 'Team', si: 'කණ්ඩායම' },
  'section.view-all': { en: 'View all', si: 'සියල්ල බලන්න' },
  'section.show-less': { en: 'Show less', si: 'අඩුවෙන් පෙන්වන්න' },

  'ratings.current': { en: 'Current Ratings', si: 'වත්මන් ඇගයීම්' },
  'ratings.rate': { en: 'Rate this film', si: 'මෙම චිත්‍රපටය ඇගයීමට ලක් කරන්න' },
  'ratings.select': { en: 'Select', si: 'තෝරන්න' },
  'ratings.your-name': { en: 'Your name', si: 'ඔබේ නම' },
  'ratings.comment-placeholder': { en: 'Leave a short comment about the movie', si: 'කෙටි අදහසක් දක්වන්න' },
  'ratings.submit': { en: 'Submit', si: 'යොමු කරන්න' },
  'ratings.submitting': { en: 'Submitting…', si: 'යොමු කරමින්…' },
  'ratings.comments': { en: 'Comments', si: 'අදහස්' },
  'ratings.no-comments': { en: 'No comments yet.', si: 'තවම අදහස් නැත.' },
  'ratings.review': { en: 'review', si: 'ඇගයීමක්' },
  'ratings.reviews': { en: 'reviews', si: 'ඇගයීම්' },
  'ratings.no-reviews': { en: 'No reviews yet', si: 'තවම ඇගයීම් නැත' },
  'ratings.stored-mongo': { en: 'Reviews are stored in MongoDB.', si: 'ඇගයීම් MongoDB හි ගබඩා කර ඇත.' },
  'ratings.stored-local': { en: 'Reviews are saved locally. Set up MONGODB_URI in .env.local for persistence.', si: 'ඇගයීම් ප්‍රාදේශීයව සුරකින ලදී.' },
  'ratings.you-rated': { en: 'You rated', si: 'ඔබ ඇගයීමට ලක් කළේ' },
  'ratings.out-of': { en: 'out of', si: 'න්' },

  'story.year': { en: 'Year', si: 'වර්ෂය' },
  'story.runtime': { en: 'Runtime', si: 'කාලය' },
  'story.genre': { en: 'Genre', si: 'ප්‍රභේදය' },
  'story.read-more': { en: 'Read more', si: 'තවත් කියවන්න' },

  'scene': { en: 'Scene', si: 'දර්ශනය' },

  'cast-crew.direction': { en: 'Direction', si: 'අධ්‍යක්ෂණය' },
  'cast-crew.production': { en: 'Production', si: 'නිෂ්පාදනය' },
  'cast-crew.assistant-direction': { en: 'Assistant Direction', si: 'සහාය අධ්‍යක්ෂණය' },
  'cast-crew.art-direction': { en: 'Art Direction', si: 'කලා අධ්‍යක්ෂණය' },
  'cast-crew.costume-design': { en: 'Costume Design', si: 'ඇඳුම් නිර්මාණය' },
  'cast-crew.dance-direction': { en: 'Dance Direction', si: 'නර්තන අධ්‍යක්ෂණය' },
  'cast-crew.music-direction': { en: 'Music Direction', si: 'සංගීත අධ්‍යක්ෂණය' },
  'cast-crew.sound-design': { en: 'Sound Design', si: 'ශබ්ද සැලසුම්කරණය' },
  'cast-crew.vfx': { en: 'VFX', si: 'VFX' },
  'cast-crew.drone-operator': { en: 'Drone Operator', si: 'Drone ක්‍රියාකරු' },
  'cast-crew.weapon-instructor': { en: 'Weapon Instructor / Gun Fights Director', si: 'Weapon Instructor / Gun Fights Director' },
  'cast-crew.additional-crew': { en: 'Additional Crew', si: 'අමතර කාර්ය මණ්ඩලය' },
  'cast-crew.main-cast': { en: 'Main Cast', si: 'ප්‍රධාන නළු නිළි නාමාවලිය' },

  'role.director-producer': { en: 'Director & Producer', si: 'අධ්‍යක්ෂ සහ නිෂ්පාදක' },
  'role.producer': { en: 'Producer', si: 'නිෂ්පාදක' },

  'name.megha-sooriyaarachchi': { en: 'Megha Sooriyaarachchi', si: 'මේඝ සූරියආරච්චි' },
  'name.nihari-perera': { en: 'Nihari Perera', si: 'නිහාරි පෙරේරා' },
  'name.sanath-gunathilaka': { en: 'Sanath Gunathilaka', si: 'සනත් ගුණතිලක' },
  'name.semini-iddamalgoda': { en: 'Semini Iddamalgoda', si: 'සෙමිණි ඉද්දමල්ගොඩ' },
  'name.jini-roys': { en: 'Jini Roys', si: 'ජිනි රොයිස්' },
  'name.harshika-rathnayake': { en: 'Harshika Rathnayake', si: 'හර්ෂිකා රත්නායක' },
  'name.ashan-dias': { en: 'Ashan Dias', si: 'අශාන් ඩයස්' },
  'name.isuru-lokuhettiarachchi': { en: 'Isuru Lokuhettiarachchi', si: 'ඉසුරු ලොකුහෙට්ටිආරච්චි' },
  'name.milinda-madugalle': { en: 'Milinda Madugalle', si: 'මිලින්ද මඩුගල්ල' },
  'name.priyankara-rathnayake': { en: 'Priyankara Rathnayake', si: 'ප්‍රියංකර රත්නායක' },
  'name.pradeep-manawadu': { en: 'Pradeep Manawadu', si: 'ප්‍රදීප් මානවඩු' },
  'name.prince-fernando': { en: 'Prince Fernando', si: 'ප්‍රින්ස් ප්‍රනාන්දු' },
  'name.lasantha-udukumbura': { en: 'Lasantha Udukumbura', si: 'ලසන්ත උඩුකුඹුර' },
  'name.priyantha-colombage': { en: 'Priyantha Colombage', si: 'ප්‍රියන්ත කොළඹගේ' },
  'name.manisha-de-silva': { en: 'Manisha De Silva', si: 'මනීෂා ද සිල්වා' },
  'name.chammika-de-silva': { en: 'Chammika De Silva', si: 'චම්මික ද සිල්වා' },
  'name.ranjith-perera': { en: 'Ranjith Perera', si: 'රංජිත් පෙරේරා' },
  'name.donald-jayantha': { en: 'Donald Jayantha', si: 'ඩොනල්ඩ් ජයන්ත' },
  'name.leslie-wimal-weerasinghe': { en: 'Leslie Wimal Weerasinghe', si: 'ලෙස්ලි විමල් වීරසිංහ' },
  'name.thiran-wijesinghe': { en: 'Thiran Wijesinghe', si: 'තිරාන් විජයසිංහ' },
  'name.dasun-sandeepa-colombage': { en: 'Dasun Sandeepa Colombage', si: 'දසුන් සඳීප කොළඹගේ' },
  'name.alex-caldera': { en: 'Alex Caldera', si: 'ඇලෙක්ස් කල්ඩෙරා' },
  'name.abitha-ruwanjith': { en: 'Abitha Ruwanjith', si: 'අභිත රුවන්ජිත්' },
  'name.priyantha-pathirana': { en: 'Priyantha Pathirana', si: 'ප්‍රියන්ත පතිරණ' },
  'name.chapa-perera': { en: 'Chapa Perera', si: 'චාපා පෙරේරා' },
  'name.nirukshan-senanayake': { en: 'Nirukshan Senanayake', si: 'නිරුක්ෂාන් සේනානායක' },
  'name.lakshman-wickramathilaka': { en: 'Lakshman Wickramathilaka', si: 'ලක්ෂ්මන් වික්‍රමතිලක' },
  'name.suraj-asmath': { en: 'Suraj Asmath', si: 'සුරාජ් අස්මත්' },
  'name.amith-wijesundara': { en: 'Amith Wijesundara', si: 'අමිත් විජේසුන්දර' },
  'name.janaka-priyadarshana': { en: 'Janaka Priyadarshana', si: 'ජනක ප්‍රියදර්ශන' },
  'name.ashen-udula': { en: 'Ashen Udula', si: 'අශේන් උදුල' },
  'name.prabath-darshana': { en: 'Prabath Darshana', si: 'ප්‍රභාත් දර්ශන' },
  'name.sm-sumith-vijaya-kumara': { en: 'S. M. Sumith Vijaya Kumara', si: 'එස්. එම්. සුමිත් විජය කුමාර' },
}

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
