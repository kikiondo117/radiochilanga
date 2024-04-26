import "../app/styles/app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Wrapper = ({ children }) => (
  <RouterProvider
    router={createBrowserRouter([{ path: "*", element: children }])}
  />
);
