export type DailyLog = {
  /** yyyy-MM-dd */
  date: string;
  image: string;
};

export type RecentPattern = {
  id: number;
  title: string;
  author: string;
  tools: string;
  image: string;
};

export const KNIT_TYPE = [
  {
    knit: "대바늘",
    count: 20
  },
  {
    knit: "코바늘",
    count: 10
  },
  {
    knit: "대바늘·코바늘",
    count: 5
  }
]

export const KNIT_PROJECT = [
  {
    image: "/illustrations/knit-top.svg",
    name: "상의",
    count: 10,
  },
  {
    image: "/illustrations/knit-dress.svg",
    name: "원피스",
    count: 10,
  },
  {
    image: "/illustrations/knit-bottom.svg",
    name: "하의",
    count: 10,
  },
  {
    image: "/illustrations/knit-acc.svg",
    name: "잡화",
    count: 10,
  },
  {
    image: "/illustrations/knit-living.svg",
    name: "생활",
    count: 10,
  },
]

// TODO: 실제로는 날짜별 저장된 뜨개로그 데이터로 교체된다.
export const DAILY_LOGS: DailyLog[] = [
  { date: "2026-09-01", image: "/illustrations/knit-top.svg" },
  { date: "2026-09-02", image: "/illustrations/knit-top.svg" },
  { date: "2026-09-03", image: "/illustrations/knit-top.svg" },
  { date: "2026-09-04", image: "/illustrations/knit-living.svg" },
  { date: "2026-09-05", image: "/illustrations/knit-living.svg" },
  { date: "2026-09-06", image: "/illustrations/knit-living.svg" },
];

export const RECENT_PATTERNS: RecentPattern[] = [
  {
    id: 1,
    title: "프레젠트 니트집업",
    author: "호호수",
    tools: "대바늘·코바늘",
    image: "/images/sample-img.png",
  },
  {
    id: 2,
    title: "베이직 라운드넥 스웨터",
    author: "뜨개상회",
    tools: "대바늘",
    image: "/images/sample-img.png",
  },
  {
    id: 3,
    title: "그래니스퀘어 가방",
    author: "코바늘일기",
    tools: "코바늘",
    image: "/images/sample-img.png",
  },
  {
    id: 4,
    title: "그래니스퀘어 가방",
    author: "코바늘일기",
    tools: "코바늘",
    image: "/images/sample-img.png",
  },
  {
    id: 5,
    title: "그래니스퀘어 가방",
    author: "코바늘일기",
    tools: "코바늘",
    image: "/images/sample-img.png",
  },
];

export const KNIT_LOGS = [
  {
    id: 1,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 2,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 3,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 4,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 5,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 6,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  },
  {
    id: 7,
    image: "/images/sample-img.png",
    title: "드디어 완성! 쉽지 않았다.",
    content: "이 도안에서 가장 어려웠던 부분은 무엇보다 코바늘을 몇장을 뜨고 두장을 뜨고 세장을 뜨고 네장을 뜨고 다섯장을 뜨고 여섯장을 뜨고 일곱장을 뜨고 여덟장을 뜨고 아홉장을 뜨고"
  }
]
