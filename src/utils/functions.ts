import { Unary } from "@utils/types";

export const tap =
  <TArg>(f: Unary<TArg, any>) =>
  (arg: TArg): TArg => {
    f(arg);

    return arg;
  };

export const equals = <TArgA, TArgB>(a: TArgA, b: TArgB): boolean =>
  a === (b as any);
