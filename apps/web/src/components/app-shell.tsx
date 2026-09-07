export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full max-w-shell flex-1 flex-col bg-background pt-safe-t pr-safe-r pb-safe-b pl-safe-l">
      {children}
    </div>
  );
}
