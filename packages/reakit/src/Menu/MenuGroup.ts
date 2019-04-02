import * as React from "react";
import { mergeProps } from "../utils/mergeProps";
import { unstable_createComponent } from "../utils/createComponent";
import { unstable_useOptions } from "../system/useOptions";
import { unstable_useProps } from "../system/useProps";
import { unstable_BoxOptions, unstable_BoxProps, useBox } from "../Box/Box";
import { Keys } from "../__utils/types";
import { useMenuState, unstable_MenuStateReturn } from "./MenuState";

export type unstable_MenuGroupOptions = unstable_BoxOptions &
  Partial<unstable_MenuStateReturn>;

export type unstable_MenuGroupProps = unstable_BoxProps &
  React.FieldsetHTMLAttributes<any>;

export function useMenuGroup(
  options: unstable_MenuGroupOptions,
  htmlProps: unstable_MenuGroupProps = {}
) {
  options = unstable_useOptions("useMenuGroup", options, htmlProps);
  htmlProps = mergeProps({ role: "group" } as typeof htmlProps, htmlProps);
  htmlProps = useBox(options, htmlProps);
  htmlProps = unstable_useProps("useMenuGroup", options, htmlProps);
  return htmlProps;
}

const keys: Keys<unstable_MenuGroupOptions> = [
  ...useBox.__keys,
  ...useMenuState.__keys
];

useMenuGroup.__keys = keys;

export const MenuGroup = unstable_createComponent({
  as: "fieldset",
  useHook: useMenuGroup
});