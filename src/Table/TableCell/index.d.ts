// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import { SharedProps } from "../index";

declare module "@kiwicom/orbit-components/lib/Table/TableCell";

type Align = "left" | "center" | "right";
type As = "th" | "td";
type Scope = "col" | "row" | "colgroup" | "rowgroup";
type WhiteSpace = "nowrap" | "pre" | "pre-line" | "pre-wrap";
type VerticalAlign =
  | "baseline"
  | "sub"
  | "super"
  | "text-top"
  | "text-bottom"
  | "middle"
  | "top"
  | "bottom";

interface Props extends SharedProps {
  readonly as?: As;
  readonly scope?: Scope;
  readonly align?: Align;
  readonly whiteSpace?: WhiteSpace;
  readonly verticalAlign?: VerticalAlign;
}

declare const TableCell: React.FunctionComponent<Props>;
export { TableCell, TableCell as default };
