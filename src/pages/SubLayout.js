// React Import
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
//Mui Imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//Components Imports 
import Login from "./Login";
import Kitchen from "./Home/Kitchen";
import Bath from "./Home/Bath";
import Dining from "./Home/Dining";
import KidsFashion from "./Fashion/KidsFashion";
import WomensFashion from "./Fashion/WomensFashion";
import MensFashion from "./Fashion/MensFashion";
import Mobiles from "./Electronics/Mobiles";
import Laptops from "./Electronics/Laptops";
import Tv from "./Electronics/Tv";
import Accesories from "./Electronics/Accesories";
import Luggage from "./Others/Luggage";
import SportsFitness from "./Others/Sports&Fitness";
import Books from "./Others/Books";
import LandingHomePage from "./LandingHomePage";
import FilterBox from "./FilterBox";
import NavBar from "../components/NavBar";



function SubLayout() {

  const [selectedCategory, setSelectedCategory] = useState(null);
const [isCatSelected, setisCatSelected] = useState(true);
  return (
    <>

      {isCatSelected && <FilterBox selectedCategory ={selectedCategory} />}
      {/* <FilterBox/> */}
      <NestedRoutes />
    </>
  );
}
function HomeRoutes() {
  return (
    <Routes>
      <Route path="kitchen" element={<Kitchen />} />
      <Route path="dining" element={<Dining />} />
      <Route path="bath" element={<Bath />} />
    </Routes>
  );
}

function FashionRoutes() {
  return (
    <Routes>
      <Route path="womensfashion" element={<WomensFashion />} />
      <Route path="mensfashion" element={<MensFashion />} />
      <Route path="kidsfashion" element={<KidsFashion />} />
    </Routes>
  );
}

function ElectronicsRoutes() {
  return (
    <Routes>
      <Route path="mobiles" element={<Mobiles />} />
      <Route path="laptops" element={<Laptops />} />
      <Route path="accessories" element={<Accesories />} />
      <Route path="tv" element={<Tv />} />
    </Routes>
  );
}

function OthersRoutes() {
  return (
    <Routes>
      <Route path="luggage" element={<Luggage />} />
      <Route path="sports&fitness" element={<SportsFitness />} />
      <Route path="books" element={<Books />} />
    </Routes>
  );
}

function NestedRoutes() {
  return (
    <Routes>
      {/* <Route path="/home" element={<LandingHomePage />} /> */}
      <Route path="home/*" element={<HomeRoutes />} />
      <Route path="fashion/*" element={<FashionRoutes />} />
      <Route path="electronics/*" element={<ElectronicsRoutes />} />
      <Route path="others/*" element={<OthersRoutes />} />
    </Routes>
  );
}
export default SubLayout;
