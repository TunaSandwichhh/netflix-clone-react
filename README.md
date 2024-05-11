# Netflix Clone

## Description
This React project is designed to manage a movie database. It includes features for users to browse movies, view details of individual movies, and perform user authentication such as login, signup, and verification.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/TunaSandwichhh/netflix-clone-react.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Services/Hooks
This project utilizes the following services/hooks:

- **Authentication Service:** Handles user authentication using Amazon Cognito.
- **TMDB API Hooks:** Provides custom hooks for fetching movies and videos from The Movie Database (TMDB).

## Paths and Routes
The application includes the following paths and routes:

- **Home:** `/` - Displays the main application with signup and login options.
- **Movies:** `/movies` - Lists all available movies fetched from TMDB. Requires authentication.
- **Movie Details:** `/movie/:movieID` - Displays details of a specific movie, including its trailer if available. Requires authentication.
- **Login:** `/login` - Allows users to log in to their accounts.
- **Signup:** `/signup` - Allows new users to create an account.
- **Verification:** `/verify` - Handles email verification for new accounts.
