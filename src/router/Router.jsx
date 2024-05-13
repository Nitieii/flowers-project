import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, QuizPage } from "../pages";
import AppLayout from "../ui/AppLayout";
import QuizStart from "../pages/QuizStart";
import Story from "../pages/Story";

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
        path: "/story",
        element: <Story />,
      },
    ],
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
