import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "../Components/Counter-App/Counter";
import TodoApp from "../Components/Todo-App/TodoApp";
import QuotesApp from "../Components/QuotesApp/QuotesApp";
import Login from "../Components/Login/Login";
import Payment from "../Components/PaymentApp/Payment";
import Products from "./Products";
import PrivateRoute from "../Components/PrivateRoutes/PrivateRoute";
import SingleProduct from "../Routes/SingleProduct"
import FireCalculator from "./FireCalculator";
import Cart from "./Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/quotes" element={<QuotesApp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fire" element={<FireCalculator />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/products"
        element={
         <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route path="/products/:id" element={<SingleProduct/>} />

    </Routes>
  );
};

export default AllRoutes;
