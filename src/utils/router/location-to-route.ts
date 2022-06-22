import type { Location } from "history";
import { parse } from "querystringify";

export const locationToRoute = (props: { location: Location }) => ({
  path: props.location.pathname,
  hash: props.location.hash,
  query: parse(props.location.search),
});
