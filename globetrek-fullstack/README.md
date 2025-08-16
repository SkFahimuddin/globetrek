# GlobeTrek — Fullstack (React + Express + MongoDB)

## Run
### 1) Backend
```bash
cd backend
cp .env.example .env   # edit MONGODB_URI if you want DB, else leave to use sample data
npm install
npm run dev
```
Health: http://localhost:4000/api/health

(Optional) Seed DB after setting MONGODB_URI:
```bash
npm run seed
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173
