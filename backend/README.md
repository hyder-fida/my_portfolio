# Portfolio Backend API

Complete MERN stack backend for managing portfolio content dynamically.

## 🚀 Features

- **Full CRUD Operations** for all portfolio sections (Hero, About, Projects, Skills, Contact)
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** for secure admin access
- **RESTful API** endpoints
- **Automatic Fallback** - Frontend works without backend
- **Free Tier Ready** - Designed for MongoDB Atlas and Render/Railway free tiers

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (free tier) OR local MongoDB
- npm or yarn

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `env.example.txt` to `.env` and fill in your values:

```bash
cp env.example.txt .env
```

Edit `.env` with your actual values:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your-random-secret-key-here
ADMIN_EMAIL=your-admin@email.com
ADMIN_PASSWORD=your-secure-password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. MongoDB Atlas Setup (Free Tier)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier M0)
4. Create a database user (username & password)
5. Whitelist your IP address (0.0.0.0/0 for all IPs - development only)
6. Get connection string and update `MONGODB_URI` in `.env`

### 4. Create Admin User

First, start the server:

```bash
npm run dev
```

Then register an admin user (one time only):

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-admin@email.com",
    "password": "your-secure-password"
  }'
```

Or use Postman/Thunder Client to make the request.

### 5. Start the Server

```bash
# Development
npm run dev

# Production
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Public Endpoints (No Auth Required)

- `GET /api/health` - Health check
- `GET /api/hero` - Get hero section data
- `GET /api/about` - Get about section data
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/skills` - Get all skill categories
- `GET /api/skills/:id` - Get single skill category
- `GET /api/contact` - Get contact section data

### Protected Endpoints (Auth Required)

All protected endpoints require JWT token in header:
```
Authorization: Bearer <your-jwt-token>
```

- `PUT /api/hero` - Update hero data
- `PUT /api/about` - Update about data
- `PUT /api/about/stats` - Update stats only
- `PUT /api/about/timeline` - Update timeline only
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/skills` - Create skill category
- `PUT /api/skills/:id` - Update skill category
- `DELETE /api/skills/:id` - Delete skill category
- `PUT /api/contact` - Update contact data

### Auth Endpoints

- `POST /api/auth/register` - Register admin user (one-time setup)
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/verify` - Verify JWT token

## 🌐 Deployment

### Option 1: Render (Recommended - Free Tier)

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create new Web Service
4. Connect your GitHub repository
5. Set build command: `cd backend && npm install`
6. Set start command: `cd backend && npm start`
7. Add environment variables in Render dashboard
8. Deploy!

### Option 2: Railway (Free Tier Available)

1. Push code to GitHub
2. Go to [Railway](https://railway.app)
3. Create new project from GitHub
4. Add environment variables
5. Deploy!

### Option 3: Vercel (Serverless)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in backend folder
3. Follow prompts
4. Add environment variables in Vercel dashboard

## 📝 Notes

- The backend automatically creates default data if database is empty
- Frontend has fallback to hardcoded data if API fails
- CORS is enabled for frontend URL
- All routes are RESTful and follow best practices
- JWT tokens expire after 7 days

## 🔒 Security

- Passwords are hashed with bcrypt
- JWT tokens for authentication
- Protected routes require valid token
- Environment variables for sensitive data
- CORS configured for specific frontend URL

## 📚 Database Schema

See `models/` folder for detailed schemas:
- Hero (personal info, social links)
- About (stats, timeline, bio)
- Project (title, description, tech stack, links)
- Skill (categories with skills and proficiency levels)
- Contact (contact info, social links)
- User (admin authentication)

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Check your MongoDB Atlas connection string
- Ensure IP is whitelisted
- Verify database user credentials

**JWT Token Invalid:**
- Token may have expired (7 days)
- Login again to get new token

**CORS Errors:**
- Update `FRONTEND_URL` in `.env`
- Ensure frontend URL matches exactly

## 📞 Support

For issues or questions, check the main project README or create an issue.

