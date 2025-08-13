declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '@env' {
  export const API_KEY: string;
  export const ROOT_URL: string;
}

declare module '*.png' {}
declare module '*.jpg' {}
declare module '*.txt' {}

declare const Tts: ReactNativeTts;