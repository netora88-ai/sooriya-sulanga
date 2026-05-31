"use client"

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { Review } from '../lib/types'

const STARS = [5, 4, 3, 2, 1]

export default function Ratings() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState<Review[]>([])
  const [submitting, setSubmitting] = useState(false)

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch('/api/ratings')
      if (res.ok) {
        const data = await res.json()
        setReviews(data.reviews)
        return
      }
    } catch {
    }
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
    fetchReviews()
  }, [fetchReviews])

  useEffect(() => {
    if (reviews.length > 0) {
      window.localStorage.setItem('sooriya-sulanga-reviews', JSON.stringify(reviews))
    }
  }, [reviews])

  const average = useMemo(() => {
    if (reviews.length === 0) return 0
    return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  }, [reviews])

  const distribution = useMemo(() => {
    const dist = [0, 0, 0, 0, 0]
    for (const r of reviews) {
      const i = 5 - r.rating
      if (i >= 0 && i < 5) dist[i]++
    }
    const max = Math.max(...dist, 1)
    return dist.map((count) => ({ count, pct: (count / reviews.length) * 100, width: (count / max) * 100 }))
  }, [reviews])

  const submitReview = async () => {
    if (rating === 0 || comment.trim().length === 0) return

    setSubmitting(true)

    const payload = { rating, name: name.trim() || 'Anonymous', comment: comment.trim() }

    try {
      const res = await fetch('/api/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        const data = await res.json()
        setReviews((current) => [data.review, ...current])
        setRating(0)
        setName('')
        setComment('')
        setSubmitting(false)
        return
      }
    } catch {
    }

    const fallback: Review = {
      _id: crypto.randomUUID(),
      ...payload,
      createdAt: new Date().toISOString(),
    }
    setReviews((current) => [fallback, ...current])
    setRating(0)
    setName('')
    setComment('')
    setSubmitting(false)
  }

  return (
    <div className="mt-4 space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white">Current Ratings</h3>

        <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-bold text-yellow-400">{average === 0 ? '—' : average.toFixed(1)}</span>
            <div className="mt-1 text-sm text-gray-400">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</div>
            <div className="mt-2 flex gap-0.5 text-xl">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={s <= Math.round(average) ? 'text-yellow-400' : 'text-gray-600'}>★</span>
              ))}
            </div>
          </div>

          <div className="space-y-2 self-center">
            {STARS.map((star) => {
              const d = distribution[5 - star]
              return (
                <div key={star} className="flex items-center gap-2 text-sm">
                  <span className="w-8 text-right text-gray-400">{star}</span>
                  <span className="text-yellow-400">★</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-700">
                    <div
                      className="h-full rounded-full bg-yellow-400 transition-all"
                      style={{ width: `${d.width}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-gray-500">{d.count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white">Rate this film</h3>

        <div className="mt-4 flex items-center gap-1 text-3xl">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setRating(s)}
              onMouseEnter={() => setHover(s)}
              onMouseLeave={() => setHover(0)}
              aria-label={`Rate ${s} star${s > 1 ? 's' : ''}`}
              className={`transition ${s <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-200'}`}
            >
              ★
            </button>
          ))}
          <span className="ml-3 text-sm text-gray-400">{rating === 0 ? 'Select' : `${rating}/5`}</span>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
          />
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a short comment about the movie"
          rows={4}
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            {typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MONGODB_URI
              ? 'Reviews are stored in MongoDB.'
              : 'Reviews are saved locally. Set up MONGODB_URI in .env.local for persistence.'}
          </p>
          <button
            type="button"
            disabled={submitting || rating === 0 || comment.trim().length === 0}
            onClick={submitReview}
            className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300 disabled:opacity-40"
          >
            {submitting ? 'Submitting…' : 'Submit'}
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white">Comments</h3>

        <div className="mt-4 space-y-3">
          {reviews.length === 0 ? (
            <p className="text-sm text-gray-400">No comments yet.</p>
          ) : (
            reviews.slice(0, 10).map((review) => (
              <article key={review._id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
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
    </div>
  )
}
