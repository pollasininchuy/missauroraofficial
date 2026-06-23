# Miss Aurora International

A production-ready Next.js 15, TypeScript, Tailwind CSS and Supabase foundation for a luxury international pageant management, judging, leaderboard and donation-based popular vote platform.

## Features
- Bilingual English/Thai homepage and event interface.
- Admin dashboard for contestants, judges, live rankings, category completion and exports.
- Judge panel with editable draft scores and final-submit locking model.
- Popular vote module separated from judge scoring.
- Supabase SQL schema with RLS, duplicate-score prevention and locked-score trigger.
- Vercel-ready configuration and environment variable example.

## Setup
1. Install dependencies: `npm install`
2. Copy env vars: `cp .env.example .env.local`
3. Create a Supabase project and run `supabase/migrations/001_schema.sql` in SQL Editor or via Supabase CLI.
4. Start locally: `npm run dev`

## Deployment
1. Push to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy. Supabase Realtime should be enabled for `scores` and `popular_votes` when live leaderboards are required.

## Production Notes
- Replace demo UI data with Supabase queries and server actions for full CRUD.
- Connect a payment provider webhook for donation vote capture and email receipts.
- Use Supabase Auth roles/claims for strict admin and judge authorization.
