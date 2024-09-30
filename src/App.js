import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import SidebarMenu from "./pages/sideBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar_outlet">
          <div>
            <SidebarMenu />
          </div>
          <div className="outlet">
            <Routes>
              <Route path="/" element={<h3>Welcome</h3>} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
