"use client";

import { RecentPatternsSlider } from "./recent-patterns-slider";
import { Calendar } from "./calendar";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@/components/icons/icon";
import {KNIT_LOGS, KNIT_PROJECT, KNIT_TYPE} from "@/features/main/constants";
import {ProjectItem} from "@/features/main/project-item";
import {KnitLogItem} from "@/features/main/knit-log-item";
import {SectionHeader} from "@/features/main/section-header";

export function Main() {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const handleAddCategoryPress = () => {}

  return (
    <div className="flex flex-1 flex-col gap-9 px-4 pt-6 pb-12 max-md:gap-5">
        {/* 최근 조회한 도안 */}
        <div>
            <SectionHeader title="최근 작업한 도안">
                <div className="flex items-center gap-5 max-md:hidden">
                    <button
                        type="button"
                        onClick={() => (emblaApi?.scrollPrev())}
                        className="cursor-pointer text-primary"
                    >
                        <Icon name="arrow-left" size={20}/>
                    </button>
                    <button
                        type="button"
                        onClick={() => (emblaApi?.scrollNext())}
                        className="cursor-pointer text-primary"
                    >
                        <Icon name="arrow-right" size={20}/>
                    </button>
                </div>
            </SectionHeader>
            <RecentPatternsSlider
                emblaRef={emblaRef}
            />
        </div>

        {/* 캘린더 + 프로젝트 정보 */}
        <div className="flex items-stretch justify-start gap-4 max-md:flex-col max-md:gap-5">
            <div className="rounded-2xl border border-dashed border-primary bg-inverse px-6 py-5">
                <Calendar />
            </div>
            <div className="flex flex-1 flex-col rounded-2xl bg-inverse">
                <div className="py-4 text-center max-md:pt-3">
                    <h2 className="text-center text-lg font-bold max-md:text-base">전체</h2>
                </div>
                <div className="flex flex-1 gap-10 px-6 pb-6 max-md:flex-col-reverse max-md:gap-6">
                    <div className="flex flex-col justify-between">
                        <div className="flex items-end gap-1.5 rounded-xl bg-background px-5 py-8 max-md:justify-end max-md:py-1">
                            <b className="text-4xl tracking-tighter text-accent max-md:text-base">20</b>
                            <span className="text-base font-bold text-primary max-md:text-base">개</span>
                        </div>
                        <div className="max-md:hidden">
                            {
                                KNIT_TYPE.map(item => (
                                    <div className="flex justify-between text-xs font-medium text-muted-foreground" key={item.knit}>
                                        <span>{item.knit}</span>
                                        <span>{item.count}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-3 max-md:flex max-md:flex-col max-md:gap-5">
                        {
                            KNIT_PROJECT.map(item => (
                                <ProjectItem items={item} key={item.name}/>
                            ))
                        }
                        <div className="flex w-full cursor-pointer items-center gap-3 text-muted-foreground" onClick={handleAddCategoryPress}>
                            <div className="ml-2 flex size-8.5 items-center justify-center rounded-sm bg-muted">
                                <Icon name="folder-plus" size={20} color="var(--color-inverse)"/>
                            </div>
                            <div className="flex-1 border-b border-dashed border-muted-foreground">
                                <span className="text-sm">카테고리를 추가해보세요!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 뜨개로그 */}
        <div>
            <SectionHeader title="뜨개로그">
                <button
                    type="button"
                >
                    <Icon name="plus" size={20}/>
                </button>
            </SectionHeader>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 rounded-2xl bg-inverse p-5 max-md:flex max-md:flex-col max-md:gap-1 max-md:p-4">
                {
                    KNIT_LOGS.slice(0, 6).map((item, index) => (
                        <KnitLogItem
                            key={item.id}
                            items={item}
                            showBorder={(index + 1) % 3 !== 0}
                            hidden={index >= 3}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  );
}
