## Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

## Installation

1. Clone the repository (or extract the zip):

   ```bash
   git clone https://github.com/irfanshamid/construction-project.git
   cd construction-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:8080`.

To build for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/          # UI Components
│   │   ├── project-list/    # Project List Page
│   │   └── project-detail/  # Project Detail Page
│   ├── models/              # TypeScript Interfaces
│   ├── services/            # Data Services (Mocked)
│   ├── app.config.ts        # Routing Configuration
│   └── app.module.ts        # Main Module Entry Point
├── assets/                  # Static Assets
│   └── styles.css           # Global Styles
├── index.html               # Main HTML Template
└── custom.d.ts              # TypeScript Declarations for HTML imports
```

## Design Decisions & Tradeoffs

### 1. Component-Based Architecture

Instead of using the legacy `$scope` heavy controllers with `ng-controller`, this project uses `angular.component`. This aligns with modern Angular (2+) architecture, making future migration easier and promoting better separation of concerns.

### 2. TypeScript

TypeScript is used to provide type safety, better tooling, and clearer interfaces for data models (e.g., `Project` interface). This reduces runtime errors and improves maintainability.

### 3. Webpack

A minimal Webpack configuration is used to bundle the application. This allows us to use ES6 modules (`import`/`export`) and handle TypeScript compilation efficiently. It also enables importing HTML templates and CSS directly into the JavaScript bundle.

### 4. Plain CSS

As requested, plain CSS is used instead of preprocessors (SASS/LESS) or frameworks (Bootstrap/Tailwind) to demonstrate core CSS skills and keep dependencies low. The CSS is scoped by class names to avoid collisions.

### 5. Mocked Data

The `ProjectService` uses `$timeout` to simulate network latency, providing a realistic async behavior for the UI to handle (loading states).

## Filtering & Sorting Logic

### Filtering

The application uses AngularJS's built-in `filter` filter for instant client-side filtering.

- **Project Name**: Filters by partial match (case-insensitive).
- **Area**: Filters by exact match from a dynamically generated dropdown list.
- **Company**: Filters by exact match from a dynamically generated dropdown list.

The filtering happens instantly as the user types or selects an option, leveraging Angular's digest cycle.

### Sorting

Projects are sorted using the `orderBy` filter:

1. **Project Value (GBP)**: Descending (Highest value first).
2. **Project Name**: Ascending (Alphabetical).

This ensures the most valuable projects are seen first, with alphabetical ordering as a tie-breaker or secondary sort.

## Assumptions

- The project ID is a string (e.g., "p-1001").
- All currency values are in GBP (£).
- Dates are provided in a string format compatible with the `Date` constructor or ISO 8601.
- The application targets modern browsers (ES5/ES6 support).

## Known Limitations (for a 3-hour scope)

- **Testing**: Unit tests (Jasmine/Karma) are not included but would be essential for a production app.
- **Error Handling**: Basic error logging is implemented; a more robust error reporting service would be better.
- **Pagination**: The list view displays all projects; server-side pagination would be needed for large datasets.
