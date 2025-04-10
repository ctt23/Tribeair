import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Trekking from "./pages/trekking/Trekking";
import Login from "./pages/login/Login";
import Verify from "./pages/verify/Verify";
import { Provider } from "react-redux";
import store from "./store";
import { useDispatch } from "react-redux";
import { setUser } from "./store"; // Import the setUser action
import FooterRoutes from "./components/footer/FooterRoutes"; // Import your FooterRoutes component

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load user session from localStorage
    console.log("use effect called")
    const loadUserSession = () => {
      const serializedState = localStorage.getItem("user");
      if (serializedState) {
        const userState = JSON.parse(serializedState);
        if (userState.firstName) {
          dispatch(setUser({ firstName: userState.firstName })); // Restore user to Redux
        }
      }
    };

    loadUserSession();
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route for root URL */}
          <Route path="/list" element={<List />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/trekking/:id" element={<Trekking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />

          {/* Dynamically render footer routes */}
          {FooterRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;