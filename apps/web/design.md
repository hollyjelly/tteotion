# Frontend Design Guide

이 문서는 `apps/web` 프론트엔드 작업 시 지켜야 할 규칙을 정리한 문서입니다. 새로 합류하는 사람도 이 문서만 보고 기존 컨벤션을 따라갈 수 있어야 합니다. 규칙이 바뀌면 이 문서도 같이 업데이트하세요.

## 1. 기술 스택

- **프레임워크**: Next.js 16 (App Router, Turbopack)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4 (CSS-first config, `tailwind.config.js` 없음 — 설정은 `src/app/globals.css`의 `@theme`에 있음)
- **클라이언트 상태**: zustand
- **서버 상태/캐싱**: TanStack Query
- **검증**: zod
- **백엔드**: Java (별도 레포/서비스). 이 프론트는 DB(Supabase Postgres)에 직접 접근하지 않고, Java REST API만 호출합니다. 로그인/인증도 백엔드가 직접 처리하며 프론트에서 Supabase Auth를 쓰지 않습니다.

## 2. 프로젝트 구조 (feature-based)

```
apps/web/src/
  app/                   # 라우팅 전용. 화면 로직/스타일을 직접 넣지 않는다.
    page.tsx             # "/" — features/main을 렌더만 함
    list/page.tsx        # "/list" — features/list를 렌더만 함
    layout.tsx           # 루트 레이아웃 (메타데이터, Providers, AppShell 배치)
    globals.css          # Tailwind import + 디자인 토큰(@theme) + 전역 리셋
  features/
    {feature}/
      {feature}-screen.tsx      # 실제 화면 컴포넌트
      items.ts (등)             # 그 기능 전용 데이터/API 함수, 훅, 타입
  components/            # 여러 화면이 공유하는 것만 (app-shell, bottom-nav 등)
```

**규칙**: 화면/기능 하나 추가할 때 반드시 두 곳을 같이 만든다.

1. `app/{경로}/page.tsx` — 라우팅용, `features/{경로}`의 화면 컴포넌트를 import해서 렌더만 함
2. `features/{경로}/{경로}-screen.tsx` — 실제 내용

여러 화면에서 재사용되는 게 아니면 `components/`에 넣지 않는다 (기능 전용 컴포넌트는 해당 `features/` 폴더 안에 둔다).

## 3. 레이아웃 — App Shell (1024px 고정폭)

- 웹이지만 Android/iOS PWA로도 쓰기 때문에, 데스크톱/태블릿에서도 **최대 1024px**(가장 큰 아이패드 세로 폭 기준)로 콘텐츠를 캡하고 그 밖은 레터박스 배경(`--color-shell-background`)으로 채운다.
- 1024px 밑(폰~작은 태블릿)에서는 레터박스 없이 화면을 꽉 채운다 — 별도 반응형 처리 불필요.
- 구현: `components/app-shell.tsx` (`max-w-shell` 토큰) + `components/bottom-nav.tsx` (화면 간 하단 탭 네비게이션).
- **safe-area 처리**: iOS 노치/홈 인디케이터, Android 제스처 바 대응을 위해 `layout.tsx`에 `viewport-fit: "cover"`가 설정되어 있고, `pt-safe-t` / `pr-safe-r` / `pb-safe-b` / `pl-safe-l` 토큰으로 여백을 준다. **직접 `padding: env(safe-area-inset-*)`를 쓰지 말고 이 토큰을 사용할 것.**

## 4. PWA

- `app/manifest.ts` — 앱 이름/아이콘/테마컬러 정의. 브랜딩 확정되면 여기부터 갱신.
- `public/icons/` — 현재 플레이스홀더 아이콘. 실제 로고 나오면 교체 필요 (192x192, 512x512, apple-touch-icon 180x180).
- `public/sw.js` — 서비스워커. 페이지 이동은 네트워크 우선 + 실패 시 `/offline`, 정적 리소스는 캐시 우선 + 백그라운드 갱신.
- `app/service-worker-register.tsx` — **프로덕션 빌드에서만** 서비스워커 등록 (개발 중 캐싱 혼란 방지). 로컬에서 서비스워커 동작 확인하려면 `pnpm --filter web build && pnpm --filter web start`로 프로덕션 모드로 띄워서 확인할 것 (`next dev`에서는 등록 안 됨).

## 5. 스타일링 규칙

### 5.1 기본 원칙

- **Tailwind CSS만 사용한다.** CSS Modules, styled-components 등 다른 스타일링 방식 도입 금지 (RSC 호환성 + PWA 성능 때문에 의도적으로 배제함).
- **컴포넌트에 `style` prop으로 원시 hex를 직접 쓰지 않는다.**

### 5.2 사이징 / gap / padding / radius

- **컬러·타이포그래피를 제외하고, Tailwind 기본 스케일만 사용한다.** Arbitrary value(`w-[72px]`, `p-[10px]` 등) 금지.
- 기본 스케일로 표현이 안 되는 구조적 값(safe-area, 셸 최대폭 등)은 `globals.css`의 `@theme`에 **네임드 토큰**으로 등록해서 쓴다 (예: `--container-shell`, `--spacing-safe-t`). 절대 `[var(--foo)]` 식의 임의값 문법을 쓰지 않는다.
- `eslint-plugin-tailwindcss`의 `no-arbitrary-value` 규칙이 이걸 강제한다 (`error`). 위반하면 빌드는 되지만 lint가 실패한다.

### 5.3 타이포그래피

- 사이징 규칙과 달리 **타이포그래피는 예외** — 필요하면 arbitrary value(`text-[13px]` 등) 사용 가능.
- 단, ESLint 규칙은 이 예외를 자동으로 구분하지 못하므로, 의도적으로 쓸 때는 바로 위에 주석을 남긴다:
  ```tsx
  {/* eslint-disable-next-line tailwindcss/no-arbitrary-value -- typography is exempt from the default-scale rule */}
  <p className="text-[13px]">...</p>
  ```

### 5.4 컬러 — semantic 토큰만

- **`globals.css`의 `@theme` 블록에 등록된 토큰만 사용한다.** 이 목록이 전부이며, 추가로 필요한 색이 있으면 **추측해서 만들지 말고 작업 요청자에게 확인 후 등록**한다.
- Tailwind 기본 팔레트(slate, red, blue, gray...)는 `--color-*: initial`로 완전히 삭제되어 있다. 즉 `bg-red-500` 같은 클래스는 **존재하지 않는다** (실수로 써도 스타일이 안 먹고, lint에서 `no-custom-classname`으로 에러가 난다).
- primitive 스케일(색상 단계값)은 두지 않는다. 오직 의미 기반 semantic 토큰만 등록한다 (`background`, `primary`, `muted-foreground`, `muted` 등 — 색 자체가 아니라 "용도"로 이름 붙임).
- 현재 등록된 토큰 (2026-09 기준, 실제 값은 `globals.css` 참조):
  | 토큰 | 값 | 용도 |
  |---|---|---|
  | `background` | `#FFF8F8` | 셸(콘텐츠 영역) 배경 |
  | `primary` | `#4A4A4A` | 기본 텍스트 색 + 버튼 등 자주 쓰이는 메인 컬러 |
  | `accent` | `#FF7D96` | 진짜 강조가 필요할 때만 드물게 쓰는 포인트 컬러 (남용 금지) |
  | `muted-foreground` | `#B7B7B7` | 보조 텍스트 (설명, 캡션 등) |
  | `muted` | `#E6E6E6` | 배경 전용 — 구분선/테두리에도 같은 색을 쓰지만(`border-muted`), 의미상 "배경" 역할로 등록된 토큰이라 이름에 border가 없음 |
  | `shell-background` | `#F4F4F5` | 1024px 밖 레터박스 배경 — 앱 영역과 구분되도록 의도적으로 무채색 회색 유지 |
  | `scrim-start` / `scrim-end` | `#C6C6C6` / `#000000` | 이미지 위 텍스트 가독성용 딤(dim) 그라데이션 (피그마 stop 29%/67% 그대로) |
  | `inverse` | `#FFFFFF` | 어두운 배경/스크림 위에 쓰는 흰색 — 배경(`bg-inverse`)·텍스트(`text-inverse`) 둘 다 이 토큰 하나로 씀 (`primary`처럼 이름 하나로 여러 역할) |
- 새 색이 필요하면 `globals.css`의 `@theme`에 `--color-{이름}: {값};` 형식으로 추가한다.
- **다크모드는 현재 정의되어 있지 않다.** 라이트 팔레트만 확정된 상태이며, 다크모드 값 없이 임의로 만들어 넣지 않는다. 다크모드가 필요해지면 실제 값을 받은 뒤 `@media (prefers-color-scheme: dark) { :root { ... } }` 블록을 추가한다.

### 5.5 도구

- `eslint-plugin-tailwindcss` — `no-arbitrary-value`, `no-custom-classname` 강제 (`apps/web/eslint.config.mjs`)
- `prettier-plugin-tailwindcss` — 클래스 자동 정렬 (루트 `.prettierrc.json`)

## 6. rem vs px

- Tailwind 기본 스케일이 rem 기반이라 사용자 접근성(폰트 크기 설정)을 자동으로 존중한다. 위 5.2 규칙(기본 스케일만 사용)을 지키면 자연스럽게 rem으로 작업하는 셈이 되므로 별도로 신경 쓸 필요 없다.
- 화면 크기(폰→태블릿)에 따라 값을 다르게 주고 싶을 땐 `rem`이 아니라 **미디어 쿼리(`md:`, `lg:` 프리픽스)** 또는 `clamp()`를 쓴다. rem/px 선택과 반응형 대응은 별개 문제다.

## 7. 새 화면 추가 체크리스트

1. `src/features/{이름}/{이름}-screen.tsx` 생성
2. `src/app/{경로}/page.tsx` 생성 — 위 컴포넌트를 import해서 렌더
3. 하단 탭에 노출할 화면이면 `src/components/bottom-nav.tsx`의 `tabs` 배열에 추가
4. 여러 화면에서 재사용할 게 아니면 컴포넌트를 `features/{이름}/` 밖으로 꺼내지 않는다
5. 커밋 전 `pnpm --filter web lint`, `pnpm --filter web build` 통과 확인
