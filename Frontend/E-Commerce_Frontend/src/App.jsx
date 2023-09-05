import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Protected from "./features/auth/components/Protected";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignupPage from "./pages/SignupPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useEffect } from "react";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected> <Home /> </Protected> ,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Protected><CartPage /></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout /></Protected>,
  },
  {
    path: "/product-details/:id",
    element: <Protected><ProductDetailsPage /></Protected>,
  },
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
  if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [user]);
    
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
