import React from 'react'

export default function TrailerEmbed({ videoId }: { videoId: string }){
  const src = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="w-full aspect-video bg-black">
      <iframe
        className="w-full h-full"
        src={src}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
