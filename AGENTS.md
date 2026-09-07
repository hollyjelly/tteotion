# Repo instructions

This is a pnpm monorepo (`pnpm-workspace.yaml`: `apps/*`, `packages/*`). Use pnpm only — never `npm`/`yarn`.

- `apps/web` — Next.js frontend (PWA, Tailwind CSS v4). Working in this folder or on anything user-facing: read [apps/web/AGENTS.md](apps/web/AGENTS.md) and [apps/web/design.md](apps/web/design.md) first and follow them (folder structure, layout, styling/color rules).
- The backend is a separate Java service in its own repo, not part of this workspace. This repo never talks to the database (Supabase Postgres) directly and never implements auth — the frontend only calls the Java REST API.

Before committing, run lint and build for whatever workspace you touched (e.g. `pnpm --filter web lint`, `pnpm --filter web build`).
