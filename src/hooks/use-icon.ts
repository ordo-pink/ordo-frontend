import React from "react";
import * as HiIcons from "react-icons/hi";
import * as DiIcons from "react-icons/di";
import { IconType } from "react-icons/lib";

import { Either } from "@utils/either";

export type IconName = keyof typeof HiIcons | keyof typeof DiIcons;

/**
 * An easy to use hook for importing an SVG icon into a component. Internally it uses
 * Hero Icons package from `react-icons` (distributed via MIT license).
 */
export const useIcon = (name?: IconName): IconType => {
  const Icon = React.useMemo(
    () =>
      Either.fromNullable(name)
        .chain((n) =>
          Either.fromNullable(
            (HiIcons as Record<keyof typeof HiIcons, IconType>)[
              n as unknown as keyof typeof HiIcons
            ]
          ).leftChain((n) =>
            Either.fromNullable(
              (DiIcons as Record<keyof typeof DiIcons, IconType>)[
                n as unknown as keyof typeof DiIcons
              ]
            )
          )
        )
        .fold(
          () => (() => null) as unknown as IconType,
          (icon) => icon
        ),
    [name]
  );

  return Icon;
};
