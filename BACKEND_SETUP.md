# 🚀 Complete Backend Setup Guide

This guide will help you set up the MERN backend for your portfolio without breaking the current frontend.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [MongoDB Atlas Setup](#mongodb-atlas-setup)
3. [Backend Setup](#backend-setup)
4. [Frontend Configuration](#frontend-configuration)
5. [Deployment](#deployment)
6. [Testing](#testing)

---

## 🏃 Quick Start

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Create `.env` File

```bash
cp env.example.txt .env
```

Edit `.env` with your values (see MongoDB setup below).

### Step 3: Start Backend

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

---

## 🗄️ MongoDB Atlas Setup (Free Tier)

### 1. Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" and create account
3. Verify email if needed

### 2. Create Cluster

1. Click "Build a Database"
2. Choose **FREE** tier (M0)
3. Select cloud provider (AWS recommended)
4. Choose region closest to you
5. Click "Create"

### 3. Create Database User

1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username and password (save these!)
5. Set privileges to "Atlas admin" or "Read and write to any database"
6. Click "Add User"

### 4. Whitelist IP Address

1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - ⚠️ **Warning**: Only for development. For production, use specific IPs.
4. Click "Confirm"

### 5. Get Connection String

1. Go to "Database" → "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
5. Replace `<password>` with your actual password
6. Add database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

### 6. Update `.env` File

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## 🛠️ Backend Setup

### 1. Install Dependencies

Backend dependencies are already in `package.json`. Run:

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Edit `backend/.env`:

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# JWT Secret (generate a random string)
# You can use: openssl rand -base64 32
JWT_SECRET=your-random-secret-key-change-this

# Admin Credentials
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-secure-password-here

# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Create Admin User

Start the server:

```bash
npm run dev
```

Then create admin user using curl or Postman:

**Using curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "your-secure-password"
  }'
```

**Or use Postman:**
- Method: POST
- URL: `http://localhost:5000/api/auth/register`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "email": "admin@yourdomain.com",
  "password": "your-secure-password"
}
```

You'll get a JWT token in response - save it for API calls!

### 4. Test Backend

```bash
# Health check
curl http://localhost:5000/api/health

# Get hero data
curl http://localhost:5000/api/hero

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "your-secure-password"
  }'
```

---

## 🎨 Frontend Configuration

### 1. Add Environment Variable

Create or update `frontend/.env` (or `.env.local`):

```env
VITE_API_URL=http://localhost:5000/api
```

For production, update to your deployed backend URL:
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

### 2. Frontend Already Configured!

The frontend is already set up with:
- ✅ API service layer in `src/services/api.js`
- ✅ Fallback to hardcoded data if API fails
- ✅ No breaking changes - works without backend

### 3. Test Frontend

Start frontend:

```bash
npm run dev
```

The frontend will:
1. Try to fetch from API
2. If API fails, use hardcoded data
3. Show console warning if using fallback

---

## 🚀 Deployment

### Option 1: Render (Recommended - Free Tier)

**Backend Deployment:**

1. Push code to GitHub
2. Go to [Render](https://render.com) and sign up
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `portfolio-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `FRONTEND_URL` (your Netlify URL)
   - `NODE_ENV=production`
7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. Copy the URL (e.g., `https://portfolio-backend.onrender.com`)

**Update Frontend `.env`:**
```env
VITE_API_URL=https://portfolio-backend.onrender.com/api
```

**Update Netlify Environment Variables:**
- Go to Netlify dashboard
- Site settings → Environment variables
- Add: `VITE_API_URL=https://portfolio-backend.onrender.com/api`
- Redeploy frontend

### Option 2: Railway (Free Tier Available)

1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set root directory to `backend`
6. Add environment variables
7. Deploy!

### Option 3: Vercel (Serverless)

```bash
cd backend
npm i -g vercel
vercel
```

Follow prompts and add environment variables.

---

## ✅ Testing

### Test Backend Endpoints

```bash
# Health check
curl http://localhost:5000/api/health

# Get all data
curl http://localhost:5000/api/hero
curl http://localhost:5000/api/about
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/skills
curl http://localhost:5000/api/contact
```

### Test Authentication

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@email.com", "password": "password"}'

# Copy the token from response, then:

# Update hero (protected)
curl -X PUT http://localhost:5000/api/hero \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"firstName": "Updated Name"}'
```

### Test Frontend

1. Start frontend: `npm run dev`
2. Open browser console
3. Check if API calls are working
4. If API fails, you'll see fallback warning (frontend still works!)

---

## 📝 Notes

- ✅ **Frontend works without backend** - fallback to hardcoded data
- ✅ **No breaking changes** - existing components work as-is
- ✅ **Gradual migration** - can switch to API when ready
- ✅ **Free tier ready** - MongoDB Atlas + Render/Railway free tiers

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Check connection string format
- Verify IP is whitelisted
- Check database user credentials

**CORS Errors:**
- Update `FRONTEND_URL` in backend `.env`
- Ensure frontend URL matches exactly

**JWT Token Invalid:**
- Token expires after 7 days
- Login again to get new token

**Frontend Not Loading:**
- Check `VITE_API_URL` is set correctly
- Frontend will use fallback if API unavailable

---

## 🎉 You're Done!

Your backend is now set up and ready to use. The frontend will continue working even if the backend is down, thanks to the fallback system.

**Next Steps:**
1. Test all endpoints
2. Create admin user
3. Update content via API
4. Deploy to production
5. Build admin panel (optional)

