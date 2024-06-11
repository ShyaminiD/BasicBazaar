import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, NestedRoutes } from "./pages/Layout";
import Login from "./pages/Login";
import LandingHomePage from "./pages/LandingHomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingHomePage />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
