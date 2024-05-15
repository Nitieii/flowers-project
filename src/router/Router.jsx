import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, QuizPage } from "../pages";
import AppLayout from "../ui/AppLayout";
import QuizStart from "../pages/QuizStart";
import Story from "../pages/Story";
import Test from "../pages/Test";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/quizStart",
        element: <QuizStart />,
      },
      {
        path: "/contact",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/story/:id",
    element: <Story />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
