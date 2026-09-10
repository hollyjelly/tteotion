interface ClampTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** 몇 줄까지 보여주고 "..."으로 자를지. 기본 1줄. */
  lines?: 1 | 2 | 3;
}

const LINE_CLAMP: Record<1 | 2 | 3, string> = {
  1: "truncate",
  2: "line-clamp-2",
  3: "line-clamp-3",
};

export function ClampText({ lines = 1, className, ...props }: ClampTextProps) {
  return <p className={`${LINE_CLAMP[lines]} ${className ?? ""}`.trim()} {...props} />;
}
