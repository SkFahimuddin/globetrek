import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Destination from '../src/models/Destination.js'

dotenv.config({ path: './.env' })
const data = [
  { title: 'Paris, France', desc: 'The city of lights, romance, and world-famous landmarks.', link: '#europe' },
  { title: 'Kyoto, Japan', desc: 'Ancient temples, cherry blossoms, and tea ceremonies.', link: '#asia' },
  { title: 'Paris, France', desc: 'The city of lights, romance, and world-famous landmarks.', link: '#europe' },
  { title: 'New York, USA', desc: 'Skyscrapers, Broadway shows, and vibrant culture.', link: '#america' },
  { title: 'Cape Town, South Africa', desc: 'Breathtaking mountains, beaches, and wildlife.', link: '#africa' },
  { title: 'Sydney, Australia', desc: 'Opera House, beaches, and coastal walks.', link: '#oceania' },
  { title: 'Rome, Italy', desc: 'Historic ruins, art, and mouthwatering cuisine.', link: '#europe' },
]
async function run() {
  const uri = process.env.MONGODB_URI || ''
  if (!uri) { console.error('Please set MONGODB_URI in backend/.env'); process.exit(1) }
  await mongoose.connect(uri)
  await Destination.deleteMany({})
  await Destination.insertMany(data)
  console.log('Seeded destinations:', data.length)
  await mongoose.disconnect()
}
run().catch(err => { console.error(err); process.exit(1) })
