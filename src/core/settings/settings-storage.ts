import { Unary } from "@utils/types";

export type TAppSettings = {};

export const SettingsStorage = (settings: TAppSettings) => ({
  get: <TResult>(f: Unary<TAppSettings, TResult>) => f(settings),
  set: (f: Unary<TAppSettings, TAppSettings>) => SettingsStorage(f(settings)),
});
