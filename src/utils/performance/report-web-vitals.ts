import type { ReportHandler } from "web-vitals";

import { Either } from "@utils/either";
import { Void } from "@utils/no-op";

export default function reportWebVitals(onPerfEntry?: ReportHandler) {
  Either.fromNullable(onPerfEntry)
    .chain((f) => Either.fromBoolean((x) => x instanceof Function, f))
    .fold(Void[0], (f) =>
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(f);
          getFID(f);
          getFCP(f);
          getLCP(f);
          getTTFB(f);
        }
      )
    );
}
