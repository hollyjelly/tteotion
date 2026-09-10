import {ClampText} from "@/components/clamp-text";
import Image from "next/image";

type KnitLogItemTypes = {
    id: number;
    image: string;
    title: string;
    content: string;
}

interface KnitLogItemProps {
    items: KnitLogItemTypes;
    /** 마지막 줄처럼 구분선이 필요 없을 때 false로 넘긴다. 기본 true. */
    showBorder?: boolean;
    /** true면 모바일(md 미만)에서만 숨긴다 — 데스크톱 6개/모바일 4개 노출에 사용. */
    hidden?: boolean;
}

export function KnitLogItem ({items, showBorder = true, hidden = false}: KnitLogItemProps) {
    return (
        <div className={`flex cursor-pointer items-center gap-8 pb-4 max-md:pb-1 ${showBorder ? "border-b border-muted" : ""} ${hidden ? "max-md:hidden" : ""}`}>
            <div className="flex-1">
                <b className="text-base">{items.title}</b>
                <ClampText lines={2} className="mt-1 text-sm leading-4.5 max-md:text-xs max-md:leading-4">{items.content}</ClampText>
            </div>
            <div className="h-20 w-28 overflow-hidden rounded-xl">
                <Image
                    className="w-full object-cover"
                    src={items.image}
                    alt={items.title}
                    width={240}
                    height={240}
                />
            </div>
        </div>
    )
}
