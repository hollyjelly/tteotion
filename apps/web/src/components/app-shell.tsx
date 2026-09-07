import { BottomNav } from "./bottom-nav";
import { Header } from "./header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full max-w-shell flex-1 flex-col bg-background pt-safe-t pr-safe-r pl-safe-l">
      <Header />
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">{children}</div>
      <BottomNav />
    </div>
  );
}
