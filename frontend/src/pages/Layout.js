import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingHomePage from "./LandingHomePage";
import NavBar from "../components/NavBar";
import SubLayout from "./SubLayout";
import Grid from '@mui/material/Grid';

export default function Layout() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>
      </Grid>
      <Grid item>
        <Routes>
          <Route path="/" element={<LandingHomePage />} />
          <Route path="/*" element={<SubLayout />} />
        </Routes>
      </Grid>
    </>
  );
}
