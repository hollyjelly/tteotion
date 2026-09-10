import type { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    children: ReactNode;
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
    return (
        <div className="mb-5 flex items-center justify-between px-2 max-md:mb-2">
            <h2 className="text-xl font-bold max-md:text-lg">{title}</h2>
            {children}
        </div>
    )
}