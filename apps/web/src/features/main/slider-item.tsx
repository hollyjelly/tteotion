import Image from "next/image";

type SliderItem = {
    id: number;
    image: string,
    title: string,
    author: string,
    tools: string,
}

interface SliderItemProps {
    items: SliderItem
}

export function SliderItems ({items}: SliderItemProps) {
    return (
        <div
            key={items.id}
            className="relative flex h-55 w-82 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-primary max-md:h-45 max-md:w-75 max-md:border-none"
        >
            <Image
                className="w-full object-cover"
                src={items.image}
                alt={items.title}
                width={240}
                height={240}
            />
            <div className="absolute inset-0 bg-linear-to-b from-scrim-start from-29% to-scrim-end to-67% opacity-18"></div>
            <div className="absolute bottom-4 left-6">
              <span className="text-base text-inverse max-md:text-xs">
                by. {items.author} | {items.tools}
              </span>
                <p className="text-base font-bold text-inverse max-md:text-xs">{items.title}</p>
            </div>
        </div>
        )
}