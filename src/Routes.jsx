import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "./Pages/Main";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import AllFoods from "./Pages/AllFoods/AllFoods";
import SingleFood from "./Pages/SingleFood/SingleFood";
import Purchase from "./Pages/Purchase/Purchase";
import Private from "./Private/Private";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allfoods',
            element:<AllFoods></AllFoods>
        },
        {
            path:'/singlefood/:_id',
            element:<SingleFood></SingleFood>,
            
        },
        {
            path:'/purchase',
            element:<Private><Purchase></Purchase></Private>,
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
  ]);


export default router