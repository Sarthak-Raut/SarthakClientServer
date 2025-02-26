import React from 'react';
import './App.css';
import AppFooter from "./components/footer/appFooter";
import AppHeader from "./components/header/appHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./pages/category";
import Home from "./pages/home";

function App() {
  return (
      <BrowserRouter>
          <div className="main">
              <AppHeader/>
              <div style={{ flex: 1, overflow: "auto" }}>
                  <Routes>
                      <Route
                          path="/"
                          element={<Home/>}
                      />
                      <Route
                          path="/categories"
                          element={<Category />}
                      />
                      <Route
                          path="*"
                          element={<div>Page Not Found</div>}
                      />
                  </Routes>
              </div>
              <AppFooter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
