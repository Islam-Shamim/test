import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import Employees from "../components/Employees/Employees";
import AddEmployee from "../components/AddEmployee/AddEmployee";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/employees',
          element:<Employees></Employees>
        },
        {
          path:'/addEmployee',
          element:<AddEmployee></AddEmployee>
        }
      ]
    },
  ]);

export default router;