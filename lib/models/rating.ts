import mongoose, { Schema, type Document } from 'mongoose'

export interface IRating extends Document {
  name: string
  rating: number
  comment: string
  createdAt: Date
}

const RatingSchema = new Schema<IRating>({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Rating ?? mongoose.model<IRating>('Rating', RatingSchema)
