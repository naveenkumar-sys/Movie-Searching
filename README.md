# Movie Searching

A lightweight React app (Vite) to search movies and view details using a public API.

**Features**
- Search movies by title with instant results.
- View movie details on a dedicated page.
- Responsive, minimal UI with reusable components.

**Tech Stack**
- React (JSX) + Vite
- CSS for styling

**Prerequisites**
- Node.js 18+ and npm (or yarn)

**Install**

```bash
npm install
```

**Run (development)**

```bash
npm run dev
```

Open the dev server URL shown by Vite (usually http://localhost:5173).

**Build**

```bash
npm run build
```

**Project Structure**

- `src/` — application source
	- `main.jsx` — app entry
	- `App.jsx` — root component
	- `components/` — UI components (`Searchbar.jsx`, `MovieCard.jsx`)
	- `context/` — `MovieContext.jsx` for state
	- `pages/` — `Home.jsx`, `MovieDetails.jsx`

**Usage**
- Type a movie title in the search bar and press Enter (or click search).
- Click a movie card to open its details page.

**Contributing**
- Open an issue or submit a pull request. Keep changes focused and documented.

**License**
- MIT (or choose a license that fits your project).

