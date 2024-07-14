import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AddRestaurant from "./components/AddRestaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Footer from "./components/Footer.js";

// import routeList from "./routeList.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    defaultElement: <AppLayout />,
    children: [
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
        element: <RestaurantMenu />,
      },
    ],
    errorElement: (
      <>
        <p>Oops! something went wrong!</p>
      </>
    ),
  },
]);
// const content = React.createElement(
//   "div",
//   { className: "parent-class" },
//   [
//     React.createElement(
//       "div",
//       { className: "child-class-1" },
//       React.createElement(
//         "p",
//         { className: "p-child-1" },
//         "Paragraph of first child-class"
//       )
//     ),
//     React.createElement("div", { className: "child-class-2" }, [
//       React.createElement(
//         "p",
//         { className: "p1-child-2" },
//         "First paragraph of second child-class"
//       ),
//       React.createElement(
//         "p",
//         { className: "p2-child-2" },
//         "Second paragraph of second child-class"
//       ),
//     ]),
//   ]
// );
// const content = (
//   <div className="parent-class">
//     <div className="child-class-1">
//       <p className="p-child-1">Paragraph of first child-class</p>
//     </div>
//     <div className="child-class-2">
//       <p className="p1-child-2">First paragraph of second child-class</p>
//       <p className="p2-child-2">Second paragraph of second child-class</p>
//     </div>
//   </div>
// );
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
function AppLayout() {
  return (
    <div className="app">
      <div className="top-common-bg">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(content); or console.log("content", content);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);