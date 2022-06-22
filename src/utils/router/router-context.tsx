import { createBrowserHistory, Location } from "history";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

import { locationToRoute } from "@utils/router/location-to-route";

export const history = createBrowserHistory();

export const RouterContext = createContext({
  route: locationToRoute({ location: history.location }),
});

export const RouterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [route, setRoute] = useState(
    locationToRoute({ location: history.location })
  );

  const onRouteChange = (location: { location: Location }) => {
    const route = locationToRoute(location);
    setRoute(route);
  };

  useLayoutEffect(() => {
    const unlisten = history.listen(onRouteChange);

    return () => {
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={{ route }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
