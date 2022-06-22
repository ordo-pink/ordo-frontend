import { FC, KeyboardEvent, MouseEvent, PropsWithChildren } from "react";

import { Either } from "@utils/either";
import { equals, tap } from "@utils/functions";
import { Void } from "@utils/no-op";
import { useRouter, history } from "@utils/router";

type Props = {
  to: string;
  onClick?: (event: MouseEvent) => void;
};

export const Link: FC<PropsWithChildren<Props>> = ({
  to,
  children,
  onClick,
  ...props
}) => {
  const { route } = useRouter();

  const onLinkClick = (event: MouseEvent) =>
    Either.of(event)
      .map(tap((e) => e.preventDefault()))
      .chain(() => Either.fromBoolean(() => !equals(route.path, to), to))
      .map(() => history.push(to))
      .chain(() => Either.fromNullable(onClick).map((f) => f(event)))
      .fold(...Void);

  const onLinkEnter = (event: KeyboardEvent) =>
    Either.fromBoolean(
      () => equals(event.key, "Enter") || equals(event.key, " "),
      event
    )
      .map(tap((e) => e.preventDefault()))
      .map(tap((e) => e.stopPropagation()))
      .map(onLinkClick as any)
      .fold(...Void);

  return (
    <a
      tabIndex={1}
      className="cursor-pointer"
      {...props}
      onClick={onLinkClick}
      onKeyDown={onLinkEnter}
    >
      {children}
    </a>
  );
};
