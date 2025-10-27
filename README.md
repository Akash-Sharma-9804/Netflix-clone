<div align="center">

# 🎬 Netflix Clone

![Netflix Clone Banner](https://media.giphy.com/media/u6XbTnJTPznQ6iFBst/giphy.gif)

> A stunning full-stack Netflix clone with modern UI/UX, real-time data, and seamless user experience

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

</div>

## ✨ Features

<div align="center">

| 🎯 Core Features | 🚀 Advanced Features |
|:-----------------|:---------------------|
| 🔐 **User Authentication** - Secure signup/login with JWT | 🎬 **Real-time Data** - Live movie/TV show data from TMDB API |
| 🎥 **Content Discovery** - Browse trending movies & shows | 🔍 **Smart Search** - Advanced search with history tracking |
| 📱 **Responsive Design** - Perfect on all devices | ⚡ **Performance** - Optimized with Vite & modern React |
| 🎨 **Modern UI/UX** - Netflix-inspired design | 🔄 **State Management** - Efficient with Zustand |
| 🎭 **Media Player** - Integrated video playback | 📋 **Watchlist** - Personal content management |

</div>

## 🛠️ Tech Stack

### 🎨 Frontend
- **⚛️ React 18** - Modern React with hooks
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **📦 Zustand** - Lightweight state management
- **🛣️ React Router** - Client-side routing
- **⚡ Vite** - Fast build tool and dev server
- **🔥 React Hot Toast** - Beautiful notifications

### 🚀 Backend
- **🟢 Node.js & Express** - Server runtime and framework
- **🗃️ MongoDB & Mongoose** - Database and ODM
- **🔑 JWT & Bcrypt** - Authentication & security
- **🎭 TMDB API** - Movie/TV show data integration
- **🔒 CORS & Cookie Parser** - Security middleware

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- TMDB API key

### 1. Clone & Setup
```bash
# Clone the repository
git clone https://github.com/Akash-Sharma-9804/Netflix-clone.git
cd Netflix-clone

# Get your TMDB API key
# Visit https://www.themoviedb.org/settings/api to get your free API key
```

### 2. Environment Configuration
Create `.env` file in the `Backend` directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/netflix-clone

# Authentication
JWT_SECRET=your_super_secure_jwt_secret_key_here

# TMDB API
TMDB_API_KEY=your_tmdb_api_key_here

# Server
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 3. Install Dependencies
```bash
# Backend dependencies
cd Backend
npm install

# Frontend dependencies
cd ../Frontend
npm install
```

### 4. Start Development Servers
```bash
# Terminal 1 - Start Backend (Port 5000)
cd Backend
npm run dev

# Terminal 2 - Start Frontend (Port 5173)
cd Frontend
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
Netflix-Clone/
├── 📁 Backend/                    # Node.js Express Server
│   ├── 📁 configs/               # Configuration files
│   │   ├── db.js                 # Database connection
│   │   └── envVars.js            # Environment variables
│   ├── 📁 controllers/           # Route controllers
│   │   ├── auth.controllers.js   # Authentication logic
│   │   ├── movie.controller.js   # Movie operations
│   │   ├── search.controller.js  # Search functionality
│   │   └── tv.controller.js      # TV show operations
│   ├── 📁 MiddleWare/            # Custom middleware
│   │   └── protectRoute.js       # Route protection
│   ├── 📁 models/                # Database models
│   │   └── user.model.js         # User schema
│   ├── 📁 Routes/                # API routes
│   │   ├── auth.routes.js        # Authentication routes
│   │   ├── movie.routes.js       # Movie routes
│   │   ├── search.routes.js      # Search routes
│   │   └── tv.routes.js          # TV show routes
│   ├── 📁 services/              # External services
│   │   └── tmdb.services.js      # TMDB API integration
│   ├── 📁 utils/                 # Utility functions
│   │   └── generateToken.js      # JWT token generation
│   └── server.js                 # Main server file
│
└── 📁 Frontend/                  # React Application
    ├── 📁 public/                # Static assets
    │   ├── netflix-logo.png      # Brand logo
    │   ├── hero-vid.m4v          # Hero video
    │   └── various images...     # UI assets
    └── 📁 src/
        ├── 📁 Components/        # Reusable components
        │   ├── Footer.jsx        # Page footer
        │   ├── MovieSlider.jsx   # Content slider
        │   ├── Navbar.jsx        # Navigation bar
        │   └── 📁 Skeletons/     # Loading components
        │       └── watchPageSkeleton.jsx
        ├── 📁 Hooks/             # Custom React hooks
        │   └── useGetTrendingContent.jsx
        ├── 📁 Pages/             # Application pages
        │   ├── 📁 Home/          # Home page components
        │   │   ├── AuthScreen.jsx
        │   │   ├── HomePage.jsx
        │   │   └── HomeScreen.jsx
        │   ├── 404.jsx           # Not found page
        │   ├── Login.jsx         # Login page
        │   ├── SearchPage.jsx    # Search results
        │   ├── SearchHistoryPage.jsx
        │   ├── SignUp.jsx        # Registration page
        │   └── WatchPage.jsx     # Media player page
        ├── 📁 Store/             # State management
        │   ├── authUser.js       # Authentication state
        │   └── content.js        # Content state
        ├── 📁 utils/             # Utility functions
        │   ├── Constants.js      # App constants
        │   └── dateFunction.js   # Date utilities
        ├── App.jsx               # Main app component
        ├── index.css             # Global styles
        └── main.jsx              # App entry point
```

## 🎯 API Endpoints

### 🔐 Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Verify authentication

### 🎬 Content
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/tv/trending` - Get trending TV shows
- `GET /api/tv/:id` - Get TV show details

### 🔍 Search
- `GET /api/search?query=:query` - Search content
- `GET /api/search/history` - Get search history

## 🎨 UI/UX Features

<div align="center">

| Feature | Description |
|:--------|:------------|
| **🌓 Dark Theme** | Netflix-inspired dark UI with red accents |
| **📱 Responsive** | Mobile-first design for all screen sizes |
| **⚡ Fast Loading** | Optimized performance with lazy loading |
| **🎭 Smooth Animations** | CSS transitions and micro-interactions |
| **🔍 Smart Search** | Real-time search with suggestions |
| **📺 Video Player** | Integrated React Player for media |
| **🔄 Loading States** | Beautiful skeleton loaders |

</div>

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd Frontend
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Vercel)
```bash
cd Backend
# Configure production environment variables
npm start
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 🐛 Reporting Issues
Found a bug? Please [create an issue](https://github.com/Akash-Sharma-9804/Netflix-clone/issues) with:
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[TMDB](https://www.themoviedb.org/)** - For providing extensive movie and TV show data
- **Netflix** - For design inspiration and UI patterns
- **React & Node.js Communities** - For amazing documentation and support

## 📞 Support

If you need help or have questions:
- 📧 **Email**: [Your Email]
- 💬 **Issues**: [GitHub Issues](https://github.com/Akash-Sharma-9804/Netflix-clone/issues)
- 🌐 **Live Demo**: [Coming Soon]

---

<div align="center">

### 🎉 Show some love by giving this repo a star! ⭐

**Made with ❤️ by [Akash Sharma](https://github.com/Akash-Sharma-9804)**

[![GitHub stars](https://img.shields.io/github/stars/Akash-Sharma-9804/Netflix-clone?style=social)](https://github.com/Akash-Sharma-9804/Netflix-clone/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Akash-Sharma-9804/Netflix-clone?style=social)](https://github.com/Akash-Sharma-9804/Netflix-clone/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Akash-Sharma-9804/Netflix-clone)](https://github.com/Akash-Sharma-9804/Netflix-clone/issues)

</div>

<!-- Animation Section -->
<div align="center">

![Netflix Animation](https://media.giphy.com/media/l0HU7JI1m1eEwz7K8/giphy.gif)

</div>
