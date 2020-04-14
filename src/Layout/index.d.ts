// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Layout";

type Type = "Search" | "Booking" | "MMB";

export interface Props extends Common.Global {
  readonly type: Type;
  readonly children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props>;
export { Layout, Layout as default };
