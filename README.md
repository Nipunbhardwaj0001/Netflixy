# 📽️ Movie Recommendation App

This project is a React-based web application that provides movie recommendations and allows users to browse and discover new films. It leverages Redux for state management, Firebase for authentication, and utilizes custom hooks to fetch and manage movie data. The application also incorporates a GPT-powered search feature for more personalized recommendations.

## 🚀 Key Features

- **User Authentication:** Secure user login and signup using Firebase.
- **Movie Browsing:** Browse now playing, popular, top-rated, and upcoming movies.
- **GPT-Powered Search:** Get movie suggestions based on GPT-generated queries.
- **Redux State Management:** Centralized state management for user, movies, GPT search, and configuration data.
- **Dynamic Language Configuration:** Change the application's language setting.
- **Responsive Design:** Provides a seamless experience across different devices.
- **Trailer Playback:** Watch trailers for featured movies.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   Redux Toolkit
    *   Tailwind CSS
    *   React Router DOM
    *   React Icons
*   **Backend:**
    *   Firebase (Authentication)
*   **AI:**
    *   GPT (for movie suggestions)
*   **Build Tool:**
    *   Vite
*   **Other:**
    *   JavaScript (ES6+)
    *   HTML
    *   CSS

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project set up with Authentication enabled

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Configure Firebase:

    *   Create a `.env` file in the root directory.
    *   Add your Firebase configuration details to the `.env` file:

        ```
        VITE_FIREBASE_API_KEY=YOUR_API_KEY
        VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
        VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
        VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
        VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
        VITE_FIREBASE_APP_ID=YOUR_APP_ID
        VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
        ```

    *   Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., with your actual Firebase project credentials.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port shown in the console).

## 📂 Project Structure

```
movie-recommendation-app/
├── .env                   # Environment variables (Firebase config)
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── firebase.json          # Firebase Hosting configuration
├── package.json           # Project dependencies and scripts
├── public/                # Public assets (e.g., images)
├── src/                   # Source code
│   ├── assets/            # Images and other assets
│   │   └── AppLogo.png    # Application logo
│   ├── components/        # React components
│   │   ├── Body.jsx       # Main application content
│   │   ├── Browse.jsx     # Browsing page
│   │   ├── GptMovieSuggestions.jsx # GPT Movie Suggestions Component
│   │   ├── GptSearch.jsx  # GPT Search Component
│   │   ├── GptSearchBar.jsx # GPT Search Bar Component
│   │   ├── Header.jsx     # Header component
│   │   ├── Login.jsx      # Login/Signup component
│   │   ├── MainContainer.jsx # Main Container Component
│   │   └── SecondaryContainer.jsx # Secondary Container Component
│   ├── hooks/             # Custom React hooks
│   │   ├── useNowPlayingMovies.js # Hook for fetching now playing movies
│   │   ├── usePopularMovies.js  # Hook for fetching popular movies
│   │   ├── useTopRatedMovie.js # Hook for fetching top rated movies
│   │   └── UseUpcomingMovies.js # Hook for fetching upcoming movies
│   ├── utils/             # Utility functions and Redux store
│   │   ├── appStore.js    # Redux store configuration
│   │   ├── configSlice.js # Redux slice for configuration
│   │   ├── constants.js   # Constants (e.g., API URLs)
│   │   ├── firebase.js    # Firebase initialization
│   │   ├── gptSlice.js    # Redux slice for GPT search
│   │   ├── movieSlice.js  # Redux slice for movies
│   │   ├── userSlice.js   # Redux slice for user
│   │   └── validate.js    # Input validation
│   ├── App.jsx            # Root component
│   ├── index.css          # Global CSS styles
│   └── main.jsx           # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 📸 Screenshots
<img width="1919" height="949" alt="image" src="https://github.com/user-attachments/assets/7761ea89-c8e8-480d-9868-ad6c444f626c" />

<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/e1ae2a3e-ca96-47cc-b737-513e9a366ff2" />

<img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/31da2ae3-a32b-4ae1-8d1b-7b32acc05ae3" />

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/67592ca9-a7ef-49d0-8864-b987d20b9e78" />

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/fb26b1cf-eabd-432c-aec1-3bace0c2baeb" />


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 💖 Thanks Message

Thank you for checking out this project! I hope it's helpful and inspires you.
