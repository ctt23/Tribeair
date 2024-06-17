import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Trekking from "./pages/trekking/Trekking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Home route for root URL */}
        <Route path="/trekking" element={<List/>} />
        <Route path="/trekking/:id" element={<Trekking/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
