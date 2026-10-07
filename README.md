# Vamshi Gowda Portfolio

A premium light-themed portfolio for Vamshi Gowda S, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Use the default Next.js settings.
4. Click Deploy.
5. Your portfolio will be live.

## Update your content

Main portfolio data is kept in:

- `data/site.ts`
- `data/projects.ts`
- `data/skills.ts`
- `data/achievements.ts`

You can update your name, headline, email, LinkedIn, education, projects, and skills here.

## Add your resume

Replace the placeholder file at:

```text
public/resume.pdf
```

with your actual resume PDF.

## Notes

- This project is a static frontend app.
- No backend, API keys, or database are required.
- It is ready for direct deployment on Vercel.
