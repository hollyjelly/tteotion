export type ListItem = {
  id: number;
  title: string;
  description: string;
};

// TODO: replace with a real fetch against the Java backend once it's ready.
export const items: ListItem[] = [
  { id: 1, title: "항목 1", description: "목록 아이템 설명입니다." },
  { id: 2, title: "항목 2", description: "목록 아이템 설명입니다." },
  { id: 3, title: "항목 3", description: "목록 아이템 설명입니다." },
];
