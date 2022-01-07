// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Landing from "./Landing/Landing";
import Tasks from "./Tasks/Tasks";
import Login from "./Login/Login";
import Register from "./Register/Register";
// import SingleNote from "./screens/SingleNote/SingleNote";
// import LoginScreen from "./screens/LoginScreen/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
// import CreateNote from "./screens/SingleNote/CreateNote";
// import { useState } from "react";
// import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import "../styles/style.css";
function App() {
  // const [search, setSearch] = useState("");

  return (
    <Router>
      {/* <Header setSearch={(s) => setSearch(s)} /> */}
      <main className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/tasks" element={<Tasks/>} />
          {/* <Route
            path="/task"
            component={({ history }) => (
              <MyNotes search={search} history={history} />
            )}
          />
          <Route path="/note/:id" component={SingleNote} />
          <Route path="/createnote" component={CreateNote} />;
          <Route path="/profile" component={ProfileScreen} /> */}
        </Routes>

      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;