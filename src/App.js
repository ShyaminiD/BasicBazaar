import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./pages/Layout";

function App() {
  return (
<BrowserRouter>
      <div className="App">
       <Layout/>
      </div>
      </BrowserRouter>
  
  );
}

export default App;
