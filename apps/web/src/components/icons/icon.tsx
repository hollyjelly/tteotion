import { ArrowLeftSvg } from "./svgs/arrow-left";
import { ArrowRightSvg } from "./svgs/arrow-right";
import { CirclePlusFillSvg } from "./svgs/circle-plus-fill";
import { FolderPlusSvg } from "./svgs/folder-plus";
import { PinAltFilledSvg } from "./svgs/pin-alt-filled";
import { PlusSvg } from "./svgs/plus";
import { RightArrowSvg } from "./svgs/right-arrow";
import { SettingFilledSvg } from "./svgs/setting-filled";

const ICONS = {
  "arrow-left": ArrowLeftSvg,
  "arrow-right": ArrowRightSvg,
  "circle-plus-fill": CirclePlusFillSvg,
  "folder-plus": FolderPlusSvg,
  "pin-alt-filled": PinAltFilledSvg,
  "plus": PlusSvg,
  "right-arrow": RightArrowSvg,
  "setting-filled": SettingFilledSvg,
};

type IconName = keyof typeof ICONS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  /** 정사각형 기준 한 변 길이(px). 기본 24px. */
  size?: number;
  /** 아이콘 색 (SVG가 stroke/fill을 currentColor로 쓰므로 이 값이 그대로 반영된다). */
  color?: string;
}

export function Icon({ name, size = 24, color, style, ...props }: IconProps) {
  const Svg = ICONS[name];
  return <Svg width={size} height={size} style={{ color, ...style }} {...props} />;
}
