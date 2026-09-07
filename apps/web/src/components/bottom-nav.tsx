"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "메인" },
  { href: "/list", label: "목록" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex shrink-0 border-t border-muted bg-background pb-safe-b">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 pb-2 text-xs ${
              isActive ? "font-semibold text-primary" : "text-muted-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
