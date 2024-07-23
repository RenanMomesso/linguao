import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
import LoadingIconSvg from "./LoadingIcon.svg";
import SettingsIcon from "./SettingsIcon.svg";
import ShareIcon from "./ShareIcon.svg";
import LinguaoIconSmall from "./LinguaoIconSmall.svg";
import FireIcon from "./FireIcon.svg";
import USAIcon from "./USAIcon.svg";
import DiamondIcon from "./DiamondIcon.svg";
import StarIcon from "./StarIcon.svg";
import NotificationIcon from "./NotificationIcon.svg";
import ChatIcon from "./ChatIcon.svg";
import ChatAiIcon from "./ChatAiIcon.svg";
import AlertIcon from "./AlertIcon.svg";
import BaloonMsgIcon from "./BaloonMsgIcon.svg";
import MicrophoneIcon from "./MicrophoneIcon.svg";
import SendIcon from "./SendIcon.svg";
import SettingsOutlineIcon from "./SettingsOutlineIcon.svg";
import StartIcon from "./StartIcon.svg";
import PlayIcon from "./PlayIcon.svg";
import PauseIcon from "./PauseIcon.svg";
import ReverseIcon from "./reverseIcon.svg";
import MenuIcon from "./MenuIcon.svg";

export const SvgComponent = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        fillRule="evenodd"
        d="M33 48a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm-18.777-9a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm34.734 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM55.5 27.957a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM7.5 18a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm45.858-2.379a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM24 0a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm22.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={60}
        x2={-11.395}
        y1={60}
        y2={39.3}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#6949FF" />
        <Stop offset={1} stopColor="#876DFF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export {
  LoadingIconSvg,
  SettingsIcon,
  ShareIcon,
  LinguaoIconSmall,
  USAIcon,
  FireIcon,
  DiamondIcon,
  StarIcon,
  NotificationIcon,
  ChatIcon,
  ChatAiIcon,
  AlertIcon,
  BaloonMsgIcon,
  MicrophoneIcon,
  SendIcon,
  SettingsOutlineIcon,
  StartIcon,
  PlayIcon,
  PauseIcon,
  ReverseIcon,
  MenuIcon,
};
