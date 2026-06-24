# 버튜버학회 (VTuberConf)

석사 학위 재학생 이상의 학위를 갖춘 버추얼 스트리머들의 가상 학술 공동체 "버튜버학회"
웹사이트입니다. [Next.js](https://nextjs.org) 16(App Router)으로 만든 **정적 사이트**이며
GitHub Pages로 배포됩니다.

- 홈 (`/`) · 소개 (`/about`) · 회원 명부 (`/directory`) · 회원 프로필 (`/members/:id`)
- React 19 + TypeScript(strict), CSS 디자인 토큰 기반 스타일링 (CSS 프레임워크 없음)
- `output: "export"` — 서버/런타임 데이터 페칭 없이 빌드 시점에 전부 정적 생성

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
```

`dev`/`build`는 실행 전에 `scripts/gen-members.mjs`를 돌려 회원 목록을 자동 생성합니다.

### 스크립트

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 회원 코드 생성 후 개발 서버 실행 |
| `npm run build` | 회원 코드 생성 후 정적 사이트를 `./out`으로 export |
| `npm run lint` | ESLint 실행 |

테스트 스위트는 없습니다. 변경 검증은 `npm run build`로 합니다(타입·export 오류 확인).

## 프로젝트 구조

```
src/
  app/            App Router 라우트 (layout, page, about, directory, members/[id])
  components/     화면 컴포넌트 + ui/ 재사용 프리미티브
  lib/
    data.ts       MEMBERS 재노출, decorateMember, FIELDS/STATS 등 페이지 콘텐츠
    types.ts      Member, SnsLink 타입
    members/      회원 1명당 파일 1개 (index.ts는 자동 생성)
    basePath.ts   GitHub Pages 서브경로용 asset() 헬퍼
scripts/
  gen-members.mjs members/index.ts 코드 생성기
```

라우트 파일은 데이터만 불러와 `src/components`의 컴포넌트에 위임합니다. 경로 별칭은
`@/* → src/*` 입니다.

## 회원 추가하기

`src/lib/members/<id>.ts`를 만들어 `Member`를 default export 하면 됩니다.

```ts
import type { Member } from '../types';

const example: Member = {
  id: 'example',     // 파일명과 일치, 라우트 /members/example 가 됨
  name: '이름',
  field: '전공 분야',
  degree: '박사과정',
  bio: '짧은 소개',
  bioLong: '긴 소개',
  // 선택: tags, accent, joined, role, live, sns, channel ...
};

export default example;
```

`src/lib/members/index.ts`는 `scripts/gen-members.mjs`가 자동 생성하므로 직접 수정하지
마세요. 파일만 추가/삭제하면 됩니다.

## 배포

`master`에 push하면 `.github/workflows/nextjs.yml`이 사이트를 빌드해 `./out`을 GitHub
Pages에 배포합니다.

> **basePath 주의:** GitHub Pages에서는 `/vtuberconf-webpage/` 서브경로로 서빙됩니다.
> `next/link`와 라우터는 basePath를 자동 적용하지만 `next/image`나 정적 에셋 URL은
> 그렇지 않으므로 `src/lib/basePath.ts`의 `asset()`으로 직접 prefix를 붙여야 합니다.

## 에이전트/기여자 안내

작업 규칙과 아키텍처 세부 사항은 [AGENTS.md](AGENTS.md)를 참고하세요. 이 저장소의
Next.js는 학습 데이터와 다른 호환성 변경이 있을 수 있으니, 코드 작성 전
`node_modules/next/dist/docs/`의 관련 가이드를 확인하세요.
