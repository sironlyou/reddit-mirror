import { BlockIcon, IconAnon, MenuIcon, WarningIcon, CommentIcon } from "../../shared/Icons";

export interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}
type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = "mobile" | "tablet" | "desktop";

export interface ICardKeys {
  author?: string;
  title: string;
  permalink?: string;
  thumbnail?: string;
  createdAt: number;
  karma?: number;
  id: string;
  selftext: string;
}

export interface ICardProps {
  item: ICardKeys;
}
export interface IControlsProps {
  karma?: number;
}
export interface IPreviewProps {
  thumbnail?: string;
}
export interface ITitleProps {
  title: string;
  id: string;
  selftext: string;
}
export interface IDropdownProps {
  button: HTMLButtonElement | null;
  children: React.ReactNode;
  onClose?: () => void;
}
export interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}
export interface ILayoutProps {
  children?: React.ReactNode;
}
export interface IPostProps {
  onClose?: () => void;
  id: string;
  selftext?: string;
  title?: string;
}
export interface IComment {
  data: {
    body: string;
    author: string;
    id: string;
    created: number;
    replies: {
      data: {
        children: IComment[];
      };
    };
  };
}
export interface IKarmaCounter {
  karma?: number;
}
export interface ITextContentProps {
  createdAt: number;
  author?: string;
  title: string;
  postlink?: string;
  id: string;
  selftext: string;
}
export interface IMenuListItem {
  postId: string;
}
export interface IContentProps {
  children?: React.ReactNode;
}
export interface IFormInput {
  comment: string;
}
export interface IIconProps {
  name: EIcons;
  size?: number;
  className?: string;
}
export enum EIcons {
  block = "block",
  anon = "anon",
  menu = "menu",
  report = "report",
  comment = "comment",
}
export const components = {
  block: BlockIcon,
  anon: IconAnon,
  menu: MenuIcon,
  report: WarningIcon,
  comment: CommentIcon,
};
export interface IProps {
  props: IComment[];
  number: number;
  openComment: string;
  setOpenComment: React.Dispatch<React.SetStateAction<string>>;
}

export enum Ecolor {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  greyF3 = "greyF3",
  greyD9 = "greyD9",
  greyC4 = "greyC4",
  grey99 = "grey99",
  grey66 = "grey66",
}
type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
export interface ITextProps {
  As?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "p";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: Ecolor;
}
export interface IItem {
  text?: React.ReactNode;
  id?: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  listElement?: React.ReactNode;
  divider?: React.ReactNode;
}
export interface IGenericListProps {
  list: IItem[];
}
