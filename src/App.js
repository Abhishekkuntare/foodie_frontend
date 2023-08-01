import "./styles/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConformOrder from "./components/cart/ConformOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Profle from "./components/profile/Profle";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashborad from "./components/admin/Dashborad";
import Myorders from "./components/myorders/Myorders";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";
import { ProtectedRoute } from "protected-route-react";

import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/conformOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserRegister from "./components/auth/UserRegister";
import UserLogin from "./components/auth/UserLogin";
import { loadUser } from "./redux/actions/loginUser";
import Store from "./components/Store/Store";
import Stories from "./components/Stories/Stories";

function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/store" element={<Store />} />
        <Route path="/stories" element={<Stories />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <UserLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <UserRegister />
            </ProtectedRoute>
          }
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="profile" element={<Profle />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmOrder" element={<ConformOrder />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="profile"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashborad />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
