import type { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    children: ReactNode;
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
    return (
        <div className="mb-2 flex items-center justify-between pr-2 pl-1">
            <h2 className="text-lg font-bold max-md:text-base">{title}</h2>
            {children}
        </div>
    )
}