import { NextResponse } from 'next/server'
import connectDB from '../../../lib/mongodb'
import Rating from '../../../lib/models/rating'

export async function GET() {
  try {
    await connectDB()
    const ratings = await Rating.find().sort({ createdAt: -1 }).limit(50).lean()

    const docs = ratings.map((r) => ({
      _id: r._id.toString(),
      name: r.name,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt,
    }))

    return NextResponse.json({ reviews: docs })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch ratings' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.rating || !body.comment?.trim()) {
      return NextResponse.json({ error: 'Rating and comment are required' }, { status: 400 })
    }

    await connectDB()

    const doc = await Rating.create({
      name: body.name?.trim() || 'Anonymous',
      rating: body.rating,
      comment: body.comment.trim(),
    })

    return NextResponse.json({
      review: {
        _id: doc._id.toString(),
        name: doc.name,
        rating: doc.rating,
        comment: doc.comment,
        createdAt: doc.createdAt,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to submit rating' }, { status: 500 })
  }
}
