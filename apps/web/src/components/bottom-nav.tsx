"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Icon} from "@/components/icons/icon";

const tabs = [
  { href: "/", icon: "home", size: 23, iconStyle: '', label: "홈" },
  { href: "/list", icon: "knitting-needles", size: 33, iconStyle: '-translate-y-0.5', label: "도안" },
  { href: "/yarn", icon: "yarn-ball", size: 27, iconStyle: '-translate-y-0.5 mt-0.5', label: "실" },
  { href: "/user", icon: "user", size: 20, iconStyle: 'mt-0.5', label: "마이" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 flex h-16 w-full shrink-0 bg-inverse pb-safe-b shadow-nav">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.icon}
            href={tab.href}
            className={`relative flex flex-1 flex-col items-center justify-start gap-1 py-2 pb-2 text-sm text-primary ${
              isActive ? "font-semibold opacity-100" : "opacity-50"
            }`}
          >
            <Icon className={tab.iconStyle} name={tab.icon} size={tab.size}/>
            <span className="absolute bottom-2.5">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
