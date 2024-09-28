import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import SidebarMenu from "./pages/sideBar";

function App() {
  return (
      <div className="App">
        <div className="sidebar_outlet">
          <div>
            <SidebarMenu/>
          </div>
          <div className="outlet">
            <Outlet/>
          </div>
        </div>
      </div>

  );
}

export default App;
