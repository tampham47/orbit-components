// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Stack";

export { Stack, Stack as default };

declare namespace Stack {
  type Direction = "row" | "column" | "row-reverse" | "column-reverse";
  type Align = "start" | "end" | "center";
  type Justify = "start" | "end" | "center" | "between" | "around";
  type Spacing =
    | "none"
    | "extraTight"
    | "tight"
    | "condensed"
    | "compact"
    | "natural"
    | "comfy"
    | "loose"
    | "extraLoose";

  interface MediaQuery extends Common.SpaceAfter {
    readonly inline?: boolean;
    readonly direction?: Direction;
    readonly wrap?: boolean;
    readonly grow?: boolean;
    readonly shrink?: boolean;
    readonly basis?: string;
    readonly align?: Align;
    readonly justify?: Justify;
    readonly spacing?: Spacing;
  }

  interface Props extends Common.Global, Common.SpaceAfter {
    readonly inline?: boolean;
    readonly direction?: Direction;
    readonly flex?: boolean;
    readonly wrap?: boolean;
    readonly grow?: boolean;
    readonly shrink?: boolean;
    readonly basis?: string;
    readonly align?: Align;
    readonly justify?: Justify;
    readonly spacing?: Spacing;
    readonly mediumMobile?: MediaQuery;
    readonly largeMobile?: MediaQuery;
    readonly tablet?: MediaQuery;
    readonly desktop?: MediaQuery;
    readonly largeDesktop?: MediaQuery;
    readonly children: React.ReactNode;
  }
}

declare class Stack extends React.Component<Stack.Props> {}