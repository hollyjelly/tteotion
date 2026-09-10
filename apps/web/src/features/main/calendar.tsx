import { useState } from "react";
import Image from "next/image";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import { ko } from "date-fns/locale";
import { DAILY_LOGS } from "./constants";

interface  CalendarProps {
    buttons?: boolean,
    select?: boolean
}

const DEFAULT_IMAGE = "/illustrations/yarn-ball.svg";

const LOGS_BY_DATE = new Map(DAILY_LOGS.map((log) => [log.date, log.image]));

function DayImageButton({ day, modifiers, ...props }: DayButtonProps) {
  void modifiers; // not a valid <button> attribute; excluded from the spread below

  const image = LOGS_BY_DATE.get(day.isoDate) ?? DEFAULT_IMAGE;

  return (
    <button {...props}>
      <Image src={image} alt="" width={28} height={28} />
    </button>
  );
}

export function Calendar({ buttons, select }: CalendarProps) {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={select ? selected : undefined}
      onSelect={setSelected}
      locale={ko}
      hideNavigation={!buttons}
      components={{ DayButton: DayImageButton }}
      classNames={{
        root: "text-primary",
        months: "flex flex-col",
        month: "flex flex-col gap-4",
        month_caption: "flex items-center justify-center",
        caption_label: "text-base font-bold text-primary",
        nav: "flex items-center justify-between",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "flex-1 text-center text-sm font-normal text-muted-foreground",
        weeks: "flex flex-col",
        week: "flex w-full",
        day: "flex-1 flex items-center justify-center p-0 text-center",
        day_button: "flex h-10 w-10 items-center justify-center rounded-full",
        selected: "ring-2 ring-accent",
        today: "rounded-sm bg-surface",
        outside: "opacity-40",
        disabled: "opacity-30",
          button_previous: "text-primary disabled:opacity-30",
          button_next: "text-primary disabled:opacity-30",
      }}
    />
  );
}
