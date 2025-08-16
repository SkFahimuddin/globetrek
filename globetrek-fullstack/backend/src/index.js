import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import destinationsRouter from './routes/destinations.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000
const ORIGIN = process.env.ALLOWED_ORIGIN || '*'
const MONGODB_URI = process.env.MONGODB_URI || ''

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: ORIGIN }))

app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api/destinations', destinationsRouter)

async function start() {
  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI)
      console.log('MongoDB connected')
    } else {
      console.log('No MONGODB_URI provided')
    }
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
  } catch (e) {
    console.error('Failed to start server:', e.message)
    process.exit(1)
  }
}
start()
