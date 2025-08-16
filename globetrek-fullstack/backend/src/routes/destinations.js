import { Router } from 'express'
import Destination from '../models/Destination.js'
const router = Router()

const sample = [
  { title: 'Paris, France', desc: 'The city of lights, romance, and world-famous landmarks.', link: '#europe' },
  { title: 'Kyoto, Japan', desc: 'Ancient temples, cherry blossoms, and tea ceremonies.', link: '#asia' },
  { title: 'New York, USA', desc: 'Skyscrapers, Broadway shows, and vibrant culture.', link: '#america' },
  { title: 'Cape Town, South Africa', desc: 'Breathtaking mountains, beaches, and wildlife.', link: '#africa' },
  { title: 'Sydney, Australia', desc: 'Opera House, beaches, and coastal walks.', link: '#oceania' },
  { title: 'Rome, Italy', desc: 'Historic ruins, art, and mouthwatering cuisine.', link: '#europe' },
]
router.get('/', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) return res.json(sample)
    const docs = await Destination.find().sort({ createdAt: -1 })
    res.json(docs)
  } catch (e) { res.status(500).json({ error: e.message }) }
})
router.post('/', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) return res.status(400).json({ error: 'DB not configured. Set MONGODB_URI.' })
    const { title, desc, link } = req.body
    const doc = await Destination.create({ title, desc, link })
    res.status(201).json(doc)
  } catch (e) { res.status(400).json({ error: e.message }) }
})
export default router
