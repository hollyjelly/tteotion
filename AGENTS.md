# Repo instructions

This is a pnpm monorepo (`pnpm-workspace.yaml`: `apps/*`, `packages/*`). Use pnpm only — never `npm`/`yarn`.

- `apps/web` — Next.js frontend (PWA, Tailwind CSS v4). Working in this folder or on anything user-facing: read [apps/web/AGENTS.md](apps/web/AGENTS.md) and [apps/web/design.md](apps/web/design.md) first and follow them (folder structure, layout, styling/color rules).
- The backend is a separate Java service in its own repo, not part of this workspace. This repo never talks to the database (Supabase Postgres) directly and never implements auth — the frontend only calls the Java REST API.

Before committing, run lint and build for whatever workspace you touched (e.g. `pnpm --filter web lint`, `pnpm --filter web build`).

## 커밋 형식

이 저장소는 Jira 연동을 위해 `commit-msg` 훅으로 커밋 제목 형식을 강제한다 (`scripts/git-hooks/`, `CONTRIBUTING.md` 참고). 형식을 지키지 않으면 커밋 자체가 거부된다.

- 형식: `<티켓키> <타입>: <내용>` (예: `PROJ-12 feat: 로그인 세션 만료 처리 추가`)
- 타입은 `scripts/git-hooks/jira-config.js`의 `commitTypes`에 표기된 대로만 통과한다 (대소문자 구분).
- 커밋에 `#review`를 붙이면 훅이 자동으로 Jira 스마트 커밋 명령으로 치환해서, push 시 해당 티켓을 리뷰 대기 상태로 옮긴다.
- 티켓키가 없는 잡다한 작업(문서 오타 수정 등)이라도 이 형식은 예외 없이 지켜야 한다 — 티켓이 없다면 먼저 Jira에 티켓을 만들고 커밋한다.

## PR 열기 규칙

PR을 merge하면 본문이 자동으로 해당 Jira 티켓의 Description으로 반영되고, 티켓이 완료 처리된다 (`.github/workflows/jira-description-sync.yml`). 그래서 PR을 열 때 아래를 반드시 지킨다:

1. PR 템플릿(`.github/PULL_REQUEST_TEMPLATE.md`)의 4개 섹션(개요/기능/작업 내용/완료 조건)을 전부 채운다.
2. 빈 섹션을 그대로 두지 않는다 — 비어있으면 Jira Description에 "(작성되지 않음)"이라고 그대로 박힌다.
3. base 브랜치는 항상 `dev`다.
4. 코드나 대화에서 명확히 드러나지 않는 내용(어떤 티켓에 연결되는지, 완료 조건이 뭔지 등)은 추측해서 채우지 않고 작업 요청자에게 먼저 묻는다.
