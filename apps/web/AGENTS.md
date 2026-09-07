<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Frontend rules for this project

Before writing or editing any frontend code in `apps/web`, read [design.md](./design.md) and follow it — it covers the folder structure (feature-based: `app/` for routing only, `features/{name}/` for screen logic, `components/` for shared UI), the App Shell layout (1024px cap, safe-area tokens), PWA setup, and the styling rules below. Do not improvise conventions that conflict with it; if something isn't covered, ask rather than guessing.

Two rules worth restating because they're easy to violate by habit:

- **Sizing/gap/padding/radius**: Tailwind's default scale only. No arbitrary values (`w-[72px]`). Structural exceptions (safe-area, shell width) are registered as named tokens in `globals.css`'s `@theme` — never invent a new `[var(--foo)]` arbitrary-value usage. Typography is exempt, but mark any arbitrary typography value with `// eslint-disable-next-line tailwindcss/no-arbitrary-value`.
- **Colors**: only the semantic tokens already defined in `globals.css`'s `@theme` (`background`, `primary`, `accent`, `muted-foreground`, `muted`, `shell-background`, `scrim-start`, `scrim-end`, `inverse`). Tailwind's built-in palette is deleted (`--color-*: initial`), so classes like `bg-red-500` don't exist. If a needed color isn't in that list, stop and ask — don't invent a hex value or add one yourself.
