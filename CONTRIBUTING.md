# 기여 가이드

이 저장소는 커밋/PR과 Jira 티켓이 자동으로 연동되도록 설정되어 있습니다. 아래 규칙은 `scripts/git-hooks/jira-config.js`, `scripts/jira/sections-config.js`가 바뀌면 커밋 시 자동으로 갱신됩니다 (직접 수정하지 마세요).

<!-- AUTO-GENERATED:JIRA-CONFIG:START -->
<!-- 이 구간은 scripts/jira/generate-docs.js가 자동으로 생성합니다. 직접 수정하지 마세요. -->

- 커밋 제목 형식: `<티켓키> <타입>: <내용>` (예: `SCRUM-12 feat: 로그인 세션 만료 처리 추가`)
- 사용 가능한 타입 (표기 그대로만 통과): `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `design`, `comment`, `rename`, `remove`, `!HOTFIX`
- 리뷰 요청 마커: `#review` (커밋 메시지에 붙이면 Jira 명령 `#검토-중`로 변환되어, push 시 티켓이 리뷰 대기 상태로 이동)
- 완료 처리: 커밋 마커 없음 — PR이 merge될 때 `완료` 전환이 자동 실행됨
- PR 본문 섹션 (Jira Description으로 그대로 반영됨):
- 개요
- 기능
- 작업 내용
- 완료 조건
<!-- AUTO-GENERATED:JIRA-CONFIG:END -->

## 브랜치 명명

브랜치는 `<타입>/<작업 내용>` 형식으로 만든다 (예: `feature/main-carousel`). base 브랜치는 항상 `dev`다.

| 타입 | 용도 |
| --- | --- |
| `feature` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `hotfix` | 운영 중 발생한 치명적 버그 긴급 수정 |
| `refactor` | 리팩터링 (기능 변화 없음) |
| `docs` | 문서 수정 |
| `test` | 테스트 코드 추가/수정 |
| `chore` | 빌드, 패키지 매니저 설정 등 기타 작업 |

주의: 브랜치 타입과 커밋 타입은 어휘가 완전히 일치하지 않는다. 브랜치는 `feature`/`hotfix`를 쓰지만 커밋은 위 자동 생성 목록대로 `feat`/`!HOTFIX`를 써야 한다. 커밋 타입은 `commit-msg` 훅이 강제하지만, 브랜치명은 훅으로 검사하지 않으므로 사람이 지킨다.
