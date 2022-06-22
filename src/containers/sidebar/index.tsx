import { MouseEvent, useRef, useState } from "react";

import { Route } from "@utils/router";
import { Either } from "@utils/either";
import { useIcon } from "@hooks/use-icon";
import { Void } from "@utils/no-op";
import { EditorSidebar } from "@pages/editor/sidebar";
import { GraphSidebar } from "@pages/graph/sidebar";
import { CheckboxesSidebar } from "@pages/checkboxes/sidebar";
import { FinderSidebar } from "@pages/finder/sidebar";
import { FoldersSidebar } from "@pages/folders/sidebar";
import { AchievementsSidebar } from "@pages/achievements/sidebar";

import "@containers/sidebar/index.css";

export const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const ChevronLeft = useIcon("HiOutlineChevronDoubleLeft");
  const ChevronRight = useIcon("HiOutlineChevronDoubleRight");

  const [isVisible, setIsVisible] = useState(false);

  const showSidebar = (e: MouseEvent) => {
    Either.fromNullable(ref.current)
      .map((div) => (div.style.width = "100%"))
      .map(() => setIsVisible(true))
      .fold(...Void);
  };

  const hideSidebar = (e: MouseEvent) => {
    Either.fromNullable(ref.current)
      .map((div) => (div.style.width = "0px"))
      .map(() => setIsVisible(false))
      .fold(...Void);
  };

  const toggleSidebar = isVisible ? hideSidebar : showSidebar;

  return (
    <>
      <div ref={ref} className="sidebar">
        <div className="px-3 py-2">
          <Route path="/">
            <EditorSidebar />
          </Route>
          <Route path="/graph">
            <GraphSidebar />
          </Route>
          <Route path="/checkboxes">
            <CheckboxesSidebar />
          </Route>
          <Route path="/finder">
            <FinderSidebar />
          </Route>
          <Route path="/folders">
            <FoldersSidebar />
          </Route>
          <Route path="/achievements">
            <AchievementsSidebar />
          </Route>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className={`z-50 text-xl py-2 px-1 absolute top-[55%] right-0`}
      >
        {isVisible ? (
          <ChevronRight className="text-neutral-600" />
        ) : (
          <ChevronLeft className="text-neutral-600" />
        )}
      </button>
    </>
  );
};
