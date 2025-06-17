
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Purchase from "./components/Purchas";
import First from "./components/First";
import AddPurchase from "./components/AddPurchas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,

    children: [
      {
        index: true,
        element: <Purchase />
      },
      {
        path: "/AddPurchase",
        element: <AddPurchase/>
      },
    ],
  }
]);

function App() {
 
  return <RouterProvider router={router}/>;
};
   

export default App;
