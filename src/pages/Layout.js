import NavBar from "../components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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



function Layout() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Layout />} /> */}
        <Route path="/home/kitchen" element={<Kitchen />} />
        <Route path="/home/dining" element={<Dining />} />
        <Route path="/home/bath" element={<Bath />} />
        <Route path="/fashion/womensfashion" element={<WomensFashion />} />
        <Route path="/fashion/mensfashion" element={<MensFashion />} />
        <Route path="/fashion/kidsfashion" element={<KidsFashion />} />
        <Route path="/electronics/mobiles" element={<Mobiles />} />
        <Route path="/electronics/laptops" element={<Laptops />} />
        <Route path="/electronics/accessories" element={<Accesories />} />
        <Route path="/electronics/tv" element={<Tv />} />
        <Route path="/others/lugagge" element={<Luggage />} />
        <Route path="/others/sports&fitness" element={<SportsFitness />} />
        <Route path="/others/books" element={<Books />} />



      </Routes>
    </>
  );
}

export default Layout;
