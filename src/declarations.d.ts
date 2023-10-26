/// <reference types="nativewind/types" />

// declare module "*.svg" {
//   import React from "react";
//   import { SvgProps } from "react-native-svg";
//   const content: React.FC<SvgProps>;
//   export default content;
// }

declare module "*.png" {
  const value: any;
  export default value;
}

// Design system
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};
