import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/Home/home-news/News";
import Message from "../pages/Home/home-msg/Message";
import { Navigate } from "react-router-dom";
import Detail from "../pages/Home/home-msg/Detail/Detail";

const routes = [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "messages",
        element: <Message />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <Detail />,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];
export default routes;
