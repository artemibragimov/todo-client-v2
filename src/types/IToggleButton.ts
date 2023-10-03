import { FC, SVGProps } from "react";

export interface IToggleButton {
  name: string;
  Icon: FC<SVGProps<SVGAElement>>;
  ActiveIcon: FC<SVGProps<SVGAElement>>;
  handleClick: (name: string) => void;
  isActive: (name: string) => boolean;
}
