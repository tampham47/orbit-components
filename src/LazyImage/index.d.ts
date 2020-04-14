// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/LazyImage";

interface Image {
  jpg: string;
  webp: string;
}

export interface Props {
  readonly placeholder?: Image;
  readonly original: Image;
  readonly name: Common.Translation;
}

const LazyImage: React.FunctionComponent<Props>;
export { LazyImage, LazyImage as default };
