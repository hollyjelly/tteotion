import Image from "next/image";

type projectItemTypes  = {
    image: string;
    name: string;
    count: number;
}

interface ProjectItemProps {
    items: projectItemTypes
}

export function ProjectItem({items}: ProjectItemProps) {
    return(
        <div className="flex items-center gap-3" key={items.name}>
            <Image className="max-md:h-7 max-md:w-8" src={items.image} alt={items.name} width={38} height={38} />
            <div className="flex flex-1 items-center justify-between border-b border-dashed border-muted-foreground pb-2">
                <b className="text-base text-primary max-md:text-sm">{items.name}</b>
                <b className="text-base text-primary max-md:text-sm"><span className="text-accent">{items.count}</span>개</b>
            </div>
        </div>
    )
}