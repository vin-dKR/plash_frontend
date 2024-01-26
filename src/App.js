import Contribute from './routes/Contribute';
import HomeCompile from './routes/HomeCompile';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import './components/responsive.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeCompile />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contribute/post",
      element: <Contribute />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
