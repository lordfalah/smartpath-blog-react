import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import Home from "./pages/Home.jsx";
import AllEvents from "./pages/AllEvents.jsx";
import {
  allEvents,
  detailEvent,
  eventCategorys,
  eventSearch,
} from "./utils/fetchs.js";
import Error from "./suspense/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: allEvents,
        errorElement: <Error />,
      },
      {
        path: "/all-event",
        element: <AllEvents />,
        loader: async ({ request }) => {
          const [{ data: events }, { data: categorys }] = await Promise.all([
            eventSearch(request),
            eventCategorys(),
          ]);
          return { events, categorys };
        },
        errorElement: <Error />,
      },
      {
        path: "event/:slug",
        element: <EventDetail />,
        loader: async ({ params }) => {
          return await detailEvent(params);
        },
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
