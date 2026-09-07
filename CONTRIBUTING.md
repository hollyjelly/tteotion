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
