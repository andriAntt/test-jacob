import { FC } from "react";

interface Props {
 color?: string;
}

const IconMinus: FC<Props> = ({ color = "inherit" }) => {
 return (
  <svg
   width="27"
   height="27"
   viewBox="0 0 27 27"
   fill={color}
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M13.498 26.8824C11.7292 26.8824 10.0618 26.5439 8.49609 25.8668C6.93034 25.1897 5.55078 24.2545 4.35742 23.0612C3.16406 21.8678 2.22884 20.4882 1.55176 18.9225C0.874674 17.3567 0.536133 15.6894 0.536133 13.9205C0.536133 12.1517 0.874674 10.4843 1.55176 8.91858C2.22884 7.35282 3.15983 5.97327 4.34473 4.77991C5.53809 3.58655 6.91764 2.65133 8.4834 1.97424C10.0492 1.29716 11.7165 0.958618 13.4854 0.958618C15.2542 0.958618 16.9215 1.29716 18.4873 1.97424C20.0615 2.65133 21.4453 3.58655 22.6387 4.77991C23.832 5.97327 24.7673 7.35282 25.4443 8.91858C26.1214 10.4843 26.46 12.1517 26.46 13.9205C26.46 15.6894 26.1214 17.3567 25.4443 18.9225C24.7673 20.4882 23.832 21.8678 22.6387 23.0612C21.4453 24.2545 20.0658 25.1897 18.5 25.8668C16.9342 26.5439 15.2669 26.8824 13.498 26.8824ZM8.39453 15.0504H18.627C18.9909 15.0504 19.2913 14.9531 19.5283 14.7584C19.7653 14.5638 19.8838 14.2929 19.8838 13.9459C19.8838 13.5905 19.7695 13.3154 19.541 13.1207C19.3125 12.9176 19.0078 12.816 18.627 12.816H8.39453C8.00521 12.816 7.69629 12.9176 7.46777 13.1207C7.23926 13.3154 7.125 13.5905 7.125 13.9459C7.125 14.2929 7.23926 14.5638 7.46777 14.7584C7.70475 14.9531 8.01367 15.0504 8.39453 15.0504Z"
    fill={color}
   />
  </svg>
 );
};

export default IconMinus;
