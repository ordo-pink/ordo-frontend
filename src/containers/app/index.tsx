import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { RouterProvider } from "@utils/router";
import { Sidebar } from "@containers/sidebar";
import { Workspace } from "@containers/workspace";
import { ActivityBar } from "@modules/activity-bar";
import { Either } from "@utils/either";
import { Void } from "@utils/no-op";

import "@containers/app/index.css";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedRight: () =>
      Either.fromBoolean(Boolean, isSidebarOpen)
        .leftMap(() => setIsSidebarOpen(true))
        .fold(...Void),
    onSwipedLeft: () =>
      Either.fromBoolean(Boolean, isSidebarOpen)
        .map(() => setIsSidebarOpen(false))
        .fold(...Void),
    preventScrollOnSwipe: true,
  });

  return (
    <RouterProvider>
      <div {...handlers} className="app">
        <ActivityBar />
        <Workspace />
        <Sidebar />
      </div>
    </RouterProvider>
  );
}
