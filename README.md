# Dragon News Client

A news application built with React and Firebase, featuring a 3-column news layout, category navigation, and Firebase authentication with Bootstrap styling.

## Features

- **3-column layout**: Header with marquee, left navigation, main content, and right sidebar
- **Category-based browsing**: Navigate news by category
- **Firebase authentication**: Email/password and Google sign-in
- **Private routes**: Protected pages for authenticated users
- **Bootstrap UI**: React Bootstrap components with responsive grid
- **News details**: Full article view with ratings

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 4 |
| Routing | React Router DOM 6 |
| Auth | Firebase 10 |
| Styling | Bootstrap 5 + React Bootstrap |
| UI | React Fast Marquee, React Rating |
| Deployment | Firebase Hosting |

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
src/
├── pages/
│   ├── Home/         # Home page
│   ├── Login/        # Login and Register pages
│   ├── News/         # News detail page
│   └── Shared/       # Header, NavigationBar, LeftNav, RightNav
├── App.jsx           # Main app with layout
└── main.jsx          # Entry point with Firebase config
```

## API

Connects to the [the-dragon-news-server](https://github.com/tarekul42/the-dragon-news-server) backend.
