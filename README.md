# PictureNote

A cross-platform note-taking application with image support, built with React Native for mobile and web.

## Features

- Cross-platform support (iOS, Android, Web)
- Image support in notes
- Clean and intuitive UI
- Offline support
- Sync across devices (coming soon)

## Tech Stack

- React Native 0.79.3
- TypeScript
- React Native Web
- Vercel for deployment

## Prerequisites

- Node.js >= 18
- npm or yarn
- React Native development environment (for mobile development)
  - [Android Studio](https://developer.android.com/studio) (for Android)
  - Xcode (for iOS, macOS only)

## Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/gabrielm888/picture.note.git
   cd picture.note
   ```

2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn
   ```

## Running the App

### Web Development

```sh
# Start the development server
npm run web
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Android

```sh
# Start Metro bundler
npm start

# In a new terminal, run the Android app
npm run android
```

### iOS

```sh
# Install iOS dependencies
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# In a new terminal, run the iOS app
npm run ios
```

## Building for Production

### Web
```sh
npm run build
```

This will create a production build in the `build` directory.

### Mobile
Follow the official React Native documentation for building production APKs/IPAs.

## Deployment

This project is configured for deployment on Vercel. Push your changes to the `main` branch to trigger automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created with ❤️ by Gabriel Munteanu
