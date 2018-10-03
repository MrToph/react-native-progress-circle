declare module "react-native-progress-circle" {
  import * as React from "react";
  import * as ReactNative from "react-native";

  export interface PercentageCircleProps {
    color?: string;
    shadowColor?: string;
    bgColor?: string;
    radius: number;
    borderWidth?: number;
    percent: number;
    children?: React.ReactNode;
    containerStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
    outerCircleStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
  }

  export default class PercentageCircle extends React.Component<
    PercentageCircleProps,
    any
  > {
    render(): JSX.Element;
  }
}
