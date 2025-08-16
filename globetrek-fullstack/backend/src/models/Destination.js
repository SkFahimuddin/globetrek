import mongoose from 'mongoose'
const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, default: '#europe' }
}, { timestamps: true })
export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema)
