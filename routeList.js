import { lazy, Suspense } from "react";

import Body from "./components/Body.js";
import AddRestaurant from "./components/AddRestaurant";
import Login from "./components/Login";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

export default routeList = [
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add-restaurant",
    element: <AddRestaurant />,
  },
  {
    path: "/restaurants/:resId",
    element: (
      <Suspense fallback={<h1>Some message, maybe due to slow internet.</h1>}>
        <RestaurantMenu />
      </Suspense>
    ),
  },
];
