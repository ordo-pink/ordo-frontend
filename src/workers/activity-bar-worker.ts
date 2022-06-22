import { useEffect } from "react";

export const useActivityBarWorker = (
  onMessage: (event: MessageEvent) => void
) => {
  useEffect(() => {
    const worker = new Worker(
      new URL("@modules/activity-bar/worker.ts", import.meta.url)
    );

    worker.addEventListener("message", onMessage);

    return () => {
      worker.removeEventListener("message", onMessage);
      worker.terminate();
    };
  }, [onMessage]);
};
