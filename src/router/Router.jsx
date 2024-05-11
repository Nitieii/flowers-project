import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, QuizzPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quizz",
    element: <QuizzPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
