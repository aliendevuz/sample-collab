# Campus App - React Version

A modern Campus App landing page built with React and Vite.

## Project Structure

```
marjona/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with logo
│   │   ├── Hero.jsx        # Hero section with illustration
│   │   └── LogosSection.jsx # Partner logos section
│   ├── styles/
│   │   ├── App.css         # Component styles
│   │   └── index.css       # Global styles
│   ├── App.jsx             # Main App component
│   └── index.jsx           # React entry point
├── index-react.html        # HTML entry point (Vite)
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Features

- **Header Component**: Navigation menu with Campus App logo
- **Hero Section**: Main headline with illustration (plant, books, cup)
- **Logos Section**: Partner/client logos carousel
- **Responsive Design**: Mobile-friendly layout
- **Modern Styling**: Dark theme with purple accents

## Design Specifications

- **Main Container**: 1440px width, 100vh height
- **Header**: 963.77px width, 50px height
- **Color Scheme**:
  - Background: #08141D (dark blue)
  - Accent: #914BF1 (purple)
  - Text: white (#FFFFFF) and gray (#999)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## Components

### Header
- Campus logo + "Campus App" text
- Navigation links (About, How it works, Feedbacks, Sign in)
- "Get started" CTA button

### Hero
- Main headline: "Your first campuse platform app"
- Description text
- "Start now" button
- SVG illustration with plant, books, and cup

### LogosSection
- Grid of 5 partner logos
- Hover animation effects

## Customization

- Edit component files in `src/components/` to modify content
- Update colors in `src/styles/App.css` and `src/styles/index.css`
- Modify SVG illustrations in the Hero component

## Technologies Used

- React 18.2.0
- Vite 4.3.0
- CSS3
- JavaScript (ES6+)
