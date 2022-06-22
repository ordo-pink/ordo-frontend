import { FC, PropsWithChildren, useContext } from "react";
import { Either } from "@utils/either";
import { equals } from "@utils/functions";
import { RouterContext } from "@utils/router";

export const Route: FC<PropsWithChildren<{ path?: string }>> = ({
  path,
  children,
}) => {
  const { route } = useContext(RouterContext);

  return Either.fromBoolean(() => equals(path, route.path), route.path).fold(
    () => null,
    () => <>{children}</>
  );
};
