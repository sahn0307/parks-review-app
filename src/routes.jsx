import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import SubmitPark from "./pages/SubmitPark";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/submitpark",
    element: <SubmitPark />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;