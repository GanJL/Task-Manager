import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks/Tasks";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Footer from "../components/Footer";

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/tasks" element={<Tasks/>} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;