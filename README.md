# Dylan's Homepage

A modern React TypeScript application showcasing Dylan's work as a consciousness researcher, open source developer, and author.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and functional components
- **Real-time API Integration**: Live data from GitHub and Farcaster APIs
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modular Component Structure**: Clean, maintainable code architecture
- **State Management**: Context API for global state management
- **Performance Optimized**: Efficient rendering and API calls

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components (Home, Books, Consciousness)
├── experiment-pages/  # Individual experiment pages
├── context/           # React Context for state management
├── services/          # API service layer
├── types/             # TypeScript type definitions
└── index.tsx          # Application entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Architecture Highlights

- **Component-based Architecture**: Each UI section is a separate, reusable component
- **TypeScript Integration**: Full type safety throughout the application
- **API Service Layer**: Centralized API calls with proper error handling
- **Context API**: Global state management without external dependencies
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu

## Adding New Experiments

To add a new experiment page to the site:

### 1. Create the Experiment Page Component

Create a new file in `src/experiment-pages/` (e.g., `YourExperimentPage.tsx`):

```tsx
import React from 'react';
import { ArrowLeft, Brain } from 'lucide-react';
import { PageType } from '../types';

interface YourExperimentPageProps {
  setCurrentPage: (page: PageType) => void;
}

export const YourExperimentPage: React.FC<YourExperimentPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={() => setCurrentPage('consciousness')}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <Brain className="w-10 h-10 text-cyan-400" />
          Your Experiment Title
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Brief description of your experiment
        </p>
      </div>

      {/* Add your experiment content sections here */}
    </div>
  );
};
```

### 2. Add Page Type

Update `src/types/index.ts`:

```typescript
export type PageType = 'home' | 'books' | 'consciousness' | 'cognitive-effort' | 'your-experiment';
```

### 3. Add Routing

Update `src/App.tsx`:

1. Import your component:
```typescript
import { YourExperimentPage } from './experiment-pages/YourExperimentPage';
```

2. Add case to renderPage function:
```typescript
case 'your-experiment':
  return <YourExperimentPage setCurrentPage={setCurrentPage} />;
```

### 4. Link to Your Experiment

Add a clickable card in `src/pages/ConsciousnessPage.tsx` in the Current Research Projects section:

```tsx
<div 
  className="bg-black/20 rounded-lg p-6 cursor-pointer hover:bg-black/30 transition-colors"
  onClick={() => setCurrentPage('your-experiment')}
>
  <h3 className="text-cyan-300 font-semibold mb-3">Your Experiment Name</h3>
  <p className="text-gray-300 text-sm mb-4">
    Brief description of what this experiment investigates.
  </p>
  <div className="flex items-center gap-2 text-cyan-400">
    <Target className="w-4 h-4" />
    <span className="text-sm">Status: Your Status</span>
  </div>
</div>
```

### Experiment Page Best Practices

- Include clear sections for Overview, Methodology, Current Status, and Resources
- Add GitHub repository links if applicable
- Include recruitment information if seeking participants
- Use consistent color gradients and styling with the rest of the site
- Consider adding visual elements or data visualizations if relevant

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- GitHub API
- Farcaster/Neynar API