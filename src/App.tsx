import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
