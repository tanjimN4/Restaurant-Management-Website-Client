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
import Myaddefdoodtems from "./Pages/Profile/Myaddefdoodtems";
import Update from "./Pages/DeleteAndUpdate/Update";
import Addfooditem from "./Pages/Profile/Addfooditem";
import Gallery from "./Pages/AllFoods/Gallery";
import Myorderedfooditems from "./Pages/Profile/Myorderedfooditems";

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
            path:'/purchase/new/:_id',
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
        {
            path:'/myaddefdoodtems',
            element:<Myaddefdoodtems></Myaddefdoodtems>
        },
        {
            path:'/myorderedfdoodtems',
            element:<Myorderedfooditems></Myorderedfooditems>
        },
        {
            path:'/update',
            element:<Update></Update>
        },
        {
            path:'/gallery',
            element:<Gallery></Gallery>
        },
        {
            path:'/addfood',
            element:<Addfooditem></Addfooditem>
        },
      ]
    },
  ]);


export default router