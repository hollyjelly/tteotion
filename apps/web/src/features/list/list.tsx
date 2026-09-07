import { items } from "./items";

export function List() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">목록 화면</h1>
      <ul className="flex list-none flex-col gap-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-muted p-4">
            <p className="text-base font-semibold">{item.title}</p>
            {/* eslint-disable-next-line tailwindcss/no-arbitrary-value -- typography is exempt from the default-scale rule */}
            <p className="mt-1 text-[13px] text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
