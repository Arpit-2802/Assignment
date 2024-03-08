import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Root from "./components/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
    // {
    //   path: "/projects",
    //   element: <Projects />,
    // },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
