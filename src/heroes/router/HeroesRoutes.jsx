import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MarvelPage from "../pages/MarvelPage";
import DcPage from "../pages/DcPage";
import { Navbar } from "../../ui";
import SearchPages from "../pages/SearchPages";
import HeroesPages from "../pages/HeroesPages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<SearchPages/>}/>
        <Route path="hero/:id" element={<HeroesPages/>}/>

        <Route path="/" element={<Navigate to="/marvel"/>}/>

      </Routes>
    </>
  );
};

export default HeroesRoutes;
