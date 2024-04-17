import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout,NestedRoutes } from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Layout />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
