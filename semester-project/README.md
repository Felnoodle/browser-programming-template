# BrowserDev Bootcamp

An AI-powered interactive learning platform for browser programming. Master HTML, CSS, and JavaScript through hands-on coding exercises with intelligent recommendations that adapt to your progress.

**Live Demo:** https://id-preview--edc27ee4-69f3-4daa-9a32-327dd862d0da.lovable.app

---

## Project Description

BrowserDev Bootcamp is a bootcamp-style learning application designed for students studying browser programming. The platform features:

- **12 Interactive Exercises** covering HTML5 semantics, CSS layouts (Flexbox/Grid), JavaScript DOM manipulation, async programming, and architecture patterns
- **AI-Powered Recommendations** that analyze completed exercises and suggest optimal next challenges based on skill progression
- **XP & Progress Tracking** with streak tracking and achievement metrics
- **3 Difficulty Levels** (Beginner → Intermediate → Advanced) for guided learning progression
- **Category-Based Organization** across HTML, CSS, and JavaScript topics

---

## Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with functional components and hooks |
| **TypeScript** | Type-safe development with strict configuration |
| **Vite** | Fast development server and production build tool |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **shadcn/ui** | Accessible UI component library (Radix UI primitives) |
| **React Router** | Client-side routing with dynamic route parameters |
| **Lucide React** | Icon library |
| **React Markdown** | Exercise instruction rendering |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting with React-specific rules |
| **Vitest** | Unit testing framework |
| **Playwright** | End-to-end testing |
| **PostCSS/Autoprefixer** | CSS processing |

---

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── ExerciseCard.tsx # Exercise display component
│   ├── Navbar.tsx       # Navigation component
│   └── NavLink.tsx      # Active route link
├── data/
│   └── exercises.json   # Exercise data (12 challenges)
├── hooks/               # Custom React hooks
├── lib/
│   ├── api.ts          # Mock API and data handling
│   └── utils.ts        # Utility functions
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── Exercises.tsx   # Exercise list
│   ├── ExerciseDetail.tsx # Individual exercise view
│   ├── Progress.tsx    # User progress dashboard
│   └── Recommendations.tsx # AI recommendations page
└── App.tsx             # Root component with routing
public/                 # Static assets
```

---

## Architecture

### Separation of Concerns

| Layer | Responsibility | Files |
|-------|---------------|-------|
| **UI Layer** | React components, JSX, styling | `src/components/`, `src/pages/` |
| **Logic Layer** | API calls, state management, data transformation | `src/lib/api.ts`, custom hooks |
| **Data Layer** | JSON data source, localStorage persistence | `src/data/exercises.json`, `localStorage` |

### Mock API Justification

This project implements a **mock API** (not a deployed backend) for the following reasons:

1. **Course Requirements**: The project demonstrates full understanding of asynchronous programming, fetch API patterns, and error handling without requiring external hosting costs
2. **Client-Side Learning Focus**: The core educational value is browser programming (DOM, events, CSS, HTML) - server infrastructure is secondary
3. **Demonstrates API Design**: The mock implementation in `src/lib/api.ts` shows proper async/await patterns, error handling, and data transformation that would apply to real APIs
4. **Progress Persistence**: User progress is stored in `localStorage` to demonstrate data persistence without requiring a database

The mock API simulates network latency (200-400ms delays) and includes proper error handling, making it functionally equivalent to a real API from the frontend perspective.

---

## Setup Instructions

### Prerequisites
- Node.js 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_REPO_URL>
cd vite_react_shadcn_ts

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder, ready for deployment to GitHub Pages, Netlify, or Vercel.

### Running Tests

```bash
# Unit tests
npm test

# E2E tests (requires build)
npm run build
npx playwright test
```

---

## AI Tool Usage Summary

This project was developed with assistance from **Lovable.dev**, an AI-powered development platform. The following aspects of the project were AI-assisted:

| Aspect | AI Contribution | Human Contribution |
|--------|----------------|-------------------|
| **Project Architecture** | Suggested React + Vite + TypeScript stack | Final architecture decisions |
| **Component Generation** | Generated base UI components (shadcn/ui integration) | Customization and styling adjustments |
| **Exercise Content** | Generated exercise descriptions and starter code | Review, validation, and refinement of challenges |
| **AI Recommendation Algorithm** | Provided implementation pattern for scoring exercises | Tuned scoring weights and difficulty progression logic |
| **Styling System** | Generated Tailwind configuration and CSS variables | Selected dark terminal theme direction |
| **Code Review** | Identified patterns for separation of concerns | Implementation of data/logic/UI layers |

**AI Usage Policy Compliance**: All AI-generated code was reviewed, tested, and validated for correctness. The student understands all code in this repository and can explain the implementation decisions made.

---

## Course Requirements Checklist

### Frontend ✓
- [x] Semantic HTML5 structure (proper use of `<header>`, `<main>`, `<section>`, etc.)
- [x] CSS for layout and responsive design (Tailwind + custom design system)
- [x] JavaScript for client-side logic (React hooks, event handling)
- [x] DOM manipulation and event handling (exercise instructions, interactions)

### Data & APIs ✓
- [x] JSON as data format (`src/data/exercises.json`)
- [x] Mock API with documented justification
- [x] Asynchronous communication (async/await, fetch simulation)
- [x] Basic error handling (try/catch, error states)

### Architecture ✓
- [x] Clear separation: UI (`components/`, `pages/`) → Logic (`api.ts`) → Data (`exercises.json`)
- [x] Modular component structure

### Deployment ✓
- [x] Frontend publicly deployed (Lovable preview/live URL)
- [x] No local installation required

---

## License

MIT License - Created for Browser Programming Course
