"use client"

import React, { useEffect, useMemo, useState } from 'react'

type Review = {
  id: string
  name: string
  rating: number
  comment: string
  createdAt: string
}

export default function Ratings(){
  const [value, setValue] = useState(0)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState<Review[]>([])
  const stars = [1, 2, 3, 4, 5]

  useEffect(() => {
    const stored = window.localStorage.getItem('sooriya-sulanga-reviews')
    if (stored) {
      try {
        setReviews(JSON.parse(stored) as Review[])
      } catch {
        setReviews([])
      }
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('sooriya-sulanga-reviews', JSON.stringify(reviews))
  }, [reviews])

  const average = useMemo(() => {
    if (reviews.length === 0) return 0
    return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  }, [reviews])

  const submitReview = () => {
    if (value === 0 || comment.trim().length === 0) {
      return
    }

    const review: Review = {
      id: crypto.randomUUID(),
      name: name.trim() || 'Anonymous',
      rating: value,
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    }

    setReviews((current) => [review, ...current])
    setValue(0)
    setName('')
    setComment('')
  }

  return (
    <div className="mt-4 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1">
        {stars.map(s=> (
          <button
            key={s}
            type="button"
            onClick={()=> setValue(s)}
            onKeyDown={(e)=> { if(e.key === 'Enter' || e.key === ' ') setValue(s) }}
            aria-label={`Rate ${s} star`}
            className={`text-2xl transition ${s <= value ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-200'}`}
          >
            ★
          </button>
        ))}
        </div>

        <div className="text-sm text-gray-300">{value === 0 ? 'Select a rating' : `You rated ${value}/5`}</div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />
        <div className="text-sm text-gray-300 md:text-right md:self-center">
          Average: {average === 0 ? 'No reviews yet' : `${average.toFixed(1)}/5 from ${reviews.length} review${reviews.length > 1 ? 's' : ''}`}
        </div>
      </div>

      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Leave a short comment about the movie"
        rows={4}
        className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-gray-500">Comments are stored locally now. We can connect MongoDB later without changing the UI.</p>
        <button
          type="button"
          onClick={submitReview}
          className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
        >
          Submit
        </button>
      </div>

      <div className="space-y-3 border-t border-white/10 pt-4">
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-400">No comments yet.</p>
        ) : (
          reviews.slice(0, 5).map((review) => (
            <article key={review.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-white">{review.name}</p>
                  <p className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleString()}</p>
                </div>
                <p className="text-sm text-yellow-300">{review.rating}/5</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">{review.comment}</p>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
