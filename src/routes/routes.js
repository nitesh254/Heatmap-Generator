import React, {  useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";   
import Login from "../components/pages/Login/Login"
import Pagenotfound from "../components/pages/page-not-found/page-not-found"
import UploadComponent from "../components/pages/UploadComponent/UploadComponent"
import HeatmapComponent from "../components/pages/Heatmap/HeatmapComponent";
import Header from "../components/common/Header";
function DefaultRoutes() { 
   
  return (
    <section className="page">
      <Header/>
      <React.Suspense fallback={<span />}>
        <Router forceRefresh>
          {/* Page Link */}
          <Routes>
            <Route exact path="/"   Component={Login}  /> 

            <Route
              exact
              path="/uploadcsv"
               Component={UploadComponent}  
            />

            <Route
              exact
              path="/heatmaps"
               Component={HeatmapComponent}  />

            <Route
              exact
              path="*"
               Component={Pagenotfound} />
          </Routes>

    
        </Router>
      </React.Suspense> 
    </section>
  );
}

export default DefaultRoutes;
