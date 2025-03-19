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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Home route for root URL */}
        <Route path="/list" element={<List />} />
        <Route path="/trekking" element={<Trekking/>} />
        <Route path="/trekking/:id" element={<Trekking/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;

