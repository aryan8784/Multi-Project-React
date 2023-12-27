import "./App.css";
import Counter from "./Components/Counter-App/Counter";
import Login from "./Components/Login/Login";
import Payment from "./Components/PaymentApp/Payment";
import QuotesApp from "./Components/QuotesApp/QuotesApp";
import Navbar from "./Navbar";
import TodoApp from "./Components/Todo-App/TodoApp";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <div>
        {/* <Counter /> */}
        {/* <TodoApp/> */}
        {/* <QuotesApp/> */}
        {/* <Login/> */}
        {/* <Payment/> */}
        <Navbar/>
        <AllRoutes/>
      </div>
    </>
  );
}

export default App;
