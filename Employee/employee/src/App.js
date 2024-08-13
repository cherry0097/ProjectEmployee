import './App.css';
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Step 2: On App.js: import { createBrowserRouter } from 'react-router-dom'
import Registration from './Components/Registration';
import Details from './Components/Details';
import About from './Components/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><About/></>
    },
    {
      path: "/registration-form",
      element: <><Navbar/><Registration/></>
    },
    {
      path: "/details",
      element: <><Navbar/><Details/></>
    }
  ]) // Step 3: On App.js: Create router.
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
