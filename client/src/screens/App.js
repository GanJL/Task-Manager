import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks/Tasks";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

