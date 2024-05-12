import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, QuizzPage } from "../pages";
import QuizzBanner from "../components/quizz/QuizzBanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quizz",
    element: <QuizzPage />,
  },
  {
    path: "/quizz-banner",
    element: <QuizzBanner />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
