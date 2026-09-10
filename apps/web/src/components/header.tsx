import { logoFont } from "@/fonts/logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 flex h-14 w-full shrink-0 items-center bg-background px-5">
      <h1 className={`${logoFont.className} cursor-pointer text-2xl tracking-wider`}>tteotion</h1>
        <div></div>
    </header>
  );
}
