# 📖 Commands Documentation

## Project Scripts (npm)
```bash
npm install          # Install project dependencies
npm run dev          # Start the development server (http://localhost:3000)
npm run build        # Build the production bundle
npm run start        # Start the production server (after build)
```

## Common Git Commands
```bash
git clone https://github.com/anisanamabila08-ui/mangkara-app.git   # Clone the repo
git checkout -b <branch-name>      # Create and switch to a new branch
git add .                          # Stage all changes
git commit -m "Your message"       # Commit staged changes
git push origin <branch-name>       # Push branch to remote
```

## Useful Development Commands
- **`npm run dev -- --port <port>`** – Run dev server on a custom port.
- **`npm run build && npm run start`** – Build and start the production server.
- **`npx husky add .husky/pre-commit "npm run lint"`** – Example of adding a pre‑commit lint hook.

## Environment Variables
Create a `.env.local` file in the project root with:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Feel free to extend this list with any additional project‑specific scripts or tools.
