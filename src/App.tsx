import Contexts from "@contexts/index";
import Home from "@pages/Home";
import Animated from "./AnimatedRoutes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnimatedRoute from "AnimatedRoutes/AnimatedRoute";
import NavigationBar from "@components/NavigationBar";
import Cart from "@pages/Cart";
import Shop from "@pages/Shop";
import Gender from "@pages/Gender";
import Payment from "@pages/Payment";
import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";
import Profile from "@pages/Profile";
import AddProducts from "@pages/Admin/AddProduct";
import AddAdmin from "@pages/Admin/AddAdmin";

function App() {
  return (
    <Contexts>
      <Router>
        <NavigationBar>
          <Animated>
            <Route
              path="/"
              element={
                <AnimatedRoute animation="fade">
                  <Home />
                </AnimatedRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <AnimatedRoute animation="fade">
                  <Shop />
                </AnimatedRoute>
              }
            />
            <Route
              path="/womens"
              element={
                <AnimatedRoute animation="fade">
                  <Gender type="women" />
                </AnimatedRoute>
              }
            />
            <Route
              path="/mens"
              element={
                <AnimatedRoute animation="fade">
                  <Gender type="men" />
                </AnimatedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <AnimatedRoute animation="fade">
                  <Cart />
                </AnimatedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AnimatedRoute animation="fade">
                  <Profile />
                </AnimatedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <AnimatedRoute animation="fade">
                  <Home />
                </AnimatedRoute>
              }
            />
            <Route
              path="/pay"
              element={
                <AnimatedRoute animation="fade">
                  <Payment />
                </AnimatedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AnimatedRoute animation="fade">
                  <Login />
                </AnimatedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <AnimatedRoute animation="fade">
                  <Register />
                </AnimatedRoute>
              }
            />
            <Route path="/admin">
              <Route path="add-product" element={<AnimatedRoute animation="fade">
                <AddProducts />
              </AnimatedRoute>} />
              <Route path="add-admin" element={<AnimatedRoute animation="fade">
                <AddAdmin />
              </AnimatedRoute>} />
            </Route>
          </Animated>
        </NavigationBar>
      </Router>
    </Contexts>
  );
}

export default App;
