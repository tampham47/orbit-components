**Props**
| Name | Type | Default | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- | ----------- |
| dataTest | string | | |
| spaceAfter | [`enum`](#enum) | | |
| label | React$Element<React$ComponentType<any>> | string | | |
| flex | string | Array<string> | | |
| size | "small" | "normal" | | |
| help | React$Node                                                                                                   |         |             |
| children   | React$Node | | |
| error | React\$Node | | |
| onChange | (ev: SyntheticInputEvent<HTMLInputElement> | SyntheticInputEvent<HTMLSelectElement>) => void | Promise<any>; | | |
| onFocus | (ev: SyntheticInputEvent<HTMLInputElement> | SyntheticInputEvent<HTMLSelectElement>) => void | Promise<any>; | | |
| onBlur | (ev: SyntheticInputEvent<HTMLInputElement> | SyntheticInputEvent<HTMLSelectElement>) => void | Promise<any>; | | |

**enums**

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |
