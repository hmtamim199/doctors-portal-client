import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Login from "../../Login/Login";
import Home from "../../pages/Home/Home/Home";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Singup from "../../pages/Singup/Singup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      }

    ]
  }
])
export default router;