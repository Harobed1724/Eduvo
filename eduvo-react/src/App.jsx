import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Classes from "./Classes";
import Teachers from "./Teachers";
import Gallery from "./Gallery";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Appointment from "./Appointment";

function App() {
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem("eduvo_auth");
    return saved ? JSON.parse(saved) : null; // { token, ward }
  });

  function handleLogin(authData) {
    setAuth(authData);
    localStorage.setItem("eduvo_auth", JSON.stringify(authData));
  }

  function handleLogout() {
    setAuth(null);
    localStorage.removeItem("eduvo_auth");
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route
          path="/dashboard"
          element={
            auth ? (
              <Dashboard
                token={auth.token}
                ward={auth.ward}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
